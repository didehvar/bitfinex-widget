let socket = null;

export const MESSAGE = 'socket/MESSAGE';
export const SENT_MESSAGE = 'socket/SENT_MESSAGE';

export default function reducer(state = { subs: [] }, action = {}) {
  switch (action.type) {
    case SENT_MESSAGE:
      if (action.payload.event === 'subscribe') {
        return {
          subs: [
            ...state.subs.filter(s => s.channel !== action.payload.channel),
            action.payload,
          ],
        };
      }
      return state;
    default:
      return state;
  }
}

const sendWhenReady = message =>
  setTimeout(() => {
    if (socket.readyState === 1) return socket.send(JSON.stringify(message));
    sendWhenReady(message);
  }, 5);

const start = (dispatch, getState) => {
  socket = new WebSocket('ws://localhost:3001/socket');
  socket.onopen = () => {};
  socket.onmessage = message => dispatch(onMessage(JSON.parse(message.data)));
  socket.onclose = () => {
    setTimeout(() => {
      start(dispatch);

      const state = getState();
      state.socket.subs.forEach(sub => {
        sendWhenReady(sub);
      });
    }, 2500);
  };
};

export const onMessage = message => ({
  type: MESSAGE,
  payload: message,
});

export const sentMessage = message => ({
  type: SENT_MESSAGE,
  payload: message,
});

export const startSocket = () => (dispatch, getState) => {
  start(dispatch, getState);
};

export const sendMessage = message => dispatch => {
  sendWhenReady(message);
  dispatch(sentMessage(message));
};

export const endSocket = () => dispatch => {
  socket.close();
};
