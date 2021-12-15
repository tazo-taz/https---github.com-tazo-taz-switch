export const numbersInDispatch = (dispatch, data) =>
  dispatch({
    type: 'setNumbers',
    payload: data,
  });
