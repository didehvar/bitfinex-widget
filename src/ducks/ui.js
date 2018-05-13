export const MESSAGE = 'socket/MESSAGE';
export const SENT_MESSAGE = 'socket/SENT_MESSAGE';

export default function reducer(state = { symbol: 'tBTCUSD' }, action = {}) {
  switch (action.type) {
    case SENT_MESSAGE:
      return state;
    default:
      return state;
  }
}

export const onMessage = message => ({
  type: MESSAGE,
  payload: message,
});
