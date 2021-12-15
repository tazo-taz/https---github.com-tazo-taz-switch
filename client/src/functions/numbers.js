import { getMyNumbersAxios } from '../axios/numbers';

export const getMyNumbersFunc = async (dispatch, Data) => {
  if (!Data)
    var {
      data: { data },
    } = await getMyNumbersAxios();
  dispatch({
    type: 'setNumbers',
    payload: Data || data,
  });
};
