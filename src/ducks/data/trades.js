import { sendMessage, MESSAGE } from '../socket';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case MESSAGE:
      const { payload } = action;

      if (!payload) return state;

      if (payload.event === 'subscribed' && payload.channel === 'trades') {
        return { ...state, [payload.symbol]: { chanId: payload.chanId } };
      }

      if (!Array.isArray(payload)) return state;

      const [chanId, type, data] = payload;
      const symbol = Object.keys(state).find(
        symbol => state[symbol].chanId === chanId,
      );

      if (Array.isArray(payload[1]) && Array.isArray(payload[1][0])) {
        // initial
        return {
          ...state,
          [symbol]: {
            chanId,
            instances: payload[1].map(([id, mts, amount, price]) => ({
              id,
              mts,
              amount,
              price,
            })),
          },
        };
      }

      if (!Array.isArray(payload[2])) return state;

      if (!symbol) return state;

      const [id, mts, amount, price] = data;

      return {
        ...state,
        [symbol]: {
          chanId,
          instances: [
            ...state[symbol].instances
              .sort((a, b) => b.mts - a.mts)
              .slice(0, -1),
            { id, mts, amount, price },
          ],
        },
      };
    default:
      return state;
  }
}

export const subscribeToTrades = symbol => async dispatch => {
  dispatch(
    sendMessage({
      event: 'subscribe',
      channel: 'trades',
      symbol,
    }),
  );
};
