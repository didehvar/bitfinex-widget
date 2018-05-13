const LOAD_TICKERS = 'data/tickers/LOAD_TICKERS';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD_TICKERS:
      return action.payload.map(ticker => ({
        symbol: ticker[0],
        dailyChange: ticker[5],
        dailyChangePercent: ticker[6],
        last: ticker[7],
      }));
    default:
      return state;
  }
}

export const loadTickers = tickers => ({
  type: LOAD_TICKERS,
  payload: tickers,
});

export const getTickers = symbols => async dispatch => {
  const res = await fetch(
    `/tickers?symbols=${symbols.map(s => `t${s.toUpperCase()}`).join(',')}`,
  );
  dispatch(loadTickers(await res.json()));
};
