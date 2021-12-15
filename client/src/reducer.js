const initialState = {
  user: false,
  numbers: [],
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'setUser':
      return { ...state, user: payload };
    case 'setNumbers':
      return { ...state, numbers: payload };
    default:
      return state;
  }
};

export default reducer;
