export const SET_SYMBOL = 'socket/SET_SYMBOL';

export default function reducer(state = { symbol: 'tBTCUSD' }, action = {}) {
  switch (action.type) {
    case SET_SYMBOL:
      return { ...state, symbol: action.payload };
    default:
      return state;
  }
}

export const setSelectedSymbol = symbol => ({
  type: SET_SYMBOL,
  payload: symbol,
});
