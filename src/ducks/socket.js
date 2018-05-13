let socket = null;

export const MESSAGE = 'socket/MESSAGE';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export const onMessage = message => ({
  type: MESSAGE,
  payload: message,
});

export const startSocket = url => dispatch => {
  socket = new WebSocket('ws://localhost:3001/socket');
  socket.onopen = () => {};
  socket.onmessage = message => dispatch(onMessage(JSON.parse(message.data)));
};

export const sendMessage = message => dispatch => {
  const sendWhenReady = () =>
    setTimeout(() => {
      if (socket.readyState === 1) return socket.send(JSON.stringify(message));
      sendWhenReady();
    }, 5);

  sendWhenReady();
};
