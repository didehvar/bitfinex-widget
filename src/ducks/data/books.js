import { sendMessage, MESSAGE } from '../socket';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case MESSAGE:
      const { payload } = action;

      if (!payload) return state;

      if (payload.event === 'subscribed' && payload.channel === 'book') {
        return { ...state, [payload.symbol]: { chanId: payload.chanId } };
      }

      if (!Array.isArray(payload) || !Array.isArray(payload[1])) return state;

      const [chanId, data] = payload;
      const symbol = Object.keys(state).find(
        symbol => state[symbol].chanId === chanId,
      );

      if (Array.isArray(payload[1][0])) {
        // snapshot
        return {
          ...state,
          [symbol]: {
            chanId,
            instances: payload[1].map(([price, count, amount]) => ({
              price,
              count,
              amount,
            })),
          },
        };
      }

      if (!symbol) return state;

      const [price, count, amount] = data;

      if (count === 0) {
        if (amount > 0 || amount < 0) {
          return {
            ...state,
            [symbol]: {
              chanId,
              instances: state[symbol].instances.filter(
                instance => instance.price !== price,
              ),
            },
          };
        }
      } else {
        return {
          ...state,
          [symbol]: {
            chanId,
            instances: state[symbol].instances.map(instance => {
              if (instance.price !== price) return instance;
              return {
                price,
                count,
                amount,
              };
            }),
          },
        };
      }

      return state;
    default:
      return state;
  }
}

export const subscribeToBook = (
  symbol,
  precision,
  frequency,
  length,
) => async dispatch => {
  dispatch(
    sendMessage({
      event: 'subscribe',
      channel: 'book',
      symbol,
      precision,
      frequency,
      length,
    }),
  );
};
