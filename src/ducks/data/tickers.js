import { sendMessage, MESSAGE } from '../socket';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case MESSAGE:
      const { payload } = action;

      if (!payload) return state;

      if (payload.event === 'subscribed' && payload.channel === 'ticker') {
        return { ...state, [payload.symbol]: { chanId: payload.chanId } };
      }

      if (!Array.isArray(payload) || !Array.isArray(payload[1])) return state;

      const [chanId, data] = payload;
      const symbol = Object.keys(state).find(
        symbol => state[symbol].chanId === chanId,
      );

      if (!symbol) return state;

      return {
        ...state,
        [symbol]: {
          chanId,
          dailyChange: data[4],
          dailyChangePercent: data[5],
          last: data[6],
        },
      };
    default:
      return state;
  }
}

export const subscribeToTicker = symbol => async dispatch => {
  dispatch(
    sendMessage({
      event: 'subscribe',
      channel: 'ticker',
      symbol,
    }),
  );
};
