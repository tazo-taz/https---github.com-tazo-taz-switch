import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input1 from '../../../../components/input/Input1';
import PasswordInput from '../../../../components/PasswordInput';
import { inputObjStateChange, objNotEmpty } from '../../../../commont tools/obj';
import { signInFunc } from '../../../../functions/auth';

export default function SignIn({ setTab }) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    const { username, password } = data;
    if (!objNotEmpty(data)) return alert('sheavset yvela veli');

    const user = { username, password };

    const { error } = await signInFunc(dispatch, user);
    if (error) alert(error);
  };
  return (
    <form onSubmit={submit} className="column inlineFlex gap-1">
      <Input1
        value={data.username}
        onChange={(e) => inputObjStateChange(e, 'username', setData)}
        placeholder="username"
      />
      <PasswordInput
        value={data.password}
        onChange={(e) => inputObjStateChange(e, 'password', setData)}
        placeholder="password"
      />
      <button>Sign in</button>
      <button type="button" onClick={() => setTab(0)}>
        Don't have an account?
      </button>
    </form>
  );
}
