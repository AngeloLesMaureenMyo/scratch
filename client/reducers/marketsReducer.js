const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketID: 10000,
  newLocation: "",
};
const marketsReducer = (state = initialState, action) => {
  let marketList;
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default marketsReducer;
