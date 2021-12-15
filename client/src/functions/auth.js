import { getUserAxios, logoutAxios, signInAxios, signUpAxios } from '../axios/auth';

export const setUserFunc = async (dispatch, user = null) => {
  if (!user) {
    var {
      data: { data },
    } = await getUserAxios();
    if (data) user = data;
  }
  dispatch({
    type: 'setUser',
    payload: user,
  });
};

export const signInFunc = async (dispatch, user) => {
  const {
    data: { data, error },
  } = await signInAxios(user);
  if (error) return { error };
  if (data) {
    dispatch({
      type: 'setUser',
      payload: data,
    });
    return {};
  }
};

export const signUpFunc = async (user) => {
  const {
    data: { error },
  } = await signUpAxios(user);
  if (error) return { error };
  else return {};
};

export const logoutFunc = async (dispatch) => {
  await logoutAxios();
  dispatch({
    type: 'setUser',
    payload: null,
  });
};
