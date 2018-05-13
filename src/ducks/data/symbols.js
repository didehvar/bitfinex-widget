const LOAD = 'data/symbols/LOAD';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD:
      return action.payload;
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
  dispatch(loadSymbols(await res.json()));
};
