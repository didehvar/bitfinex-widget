const LOAD = 'data/symbols/LOAD';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD:
      return action.payload.map(symbol => `t${symbol.toUpperCase()}`);
    default:
      return state;
  }
}

export const loadSymbols = symbols => ({
  type: LOAD,
  payload: symbols,
});

export const getSymbols = () => async dispatch => {
  const res = await fetch('/symbols');
  const symbols = await res.json();

  dispatch(loadSymbols(symbols));

  return symbols;
};
