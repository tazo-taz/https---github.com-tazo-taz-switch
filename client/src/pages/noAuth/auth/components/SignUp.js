import React, { useState } from 'react';
import Input1 from '../../../../components/input/Input1';
import PasswordInput from '../../../../components/PasswordInput';
import { inputObjStateChange, objNotEmpty } from '../../../../commont tools/obj';
import { signUpFunc } from '../../../../functions/auth';

export default function SignIn({ setTab }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = data;
    if (!objNotEmpty(data)) return alert('sheavset yvela veli');
    if (!(password === confirmPassword)) return alert('parolebi ar emtxveva');

    const user = { username, password };

    const { error } = await signUpFunc(user);
    if (error) alert(error);
    else setTab(1);
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
      <PasswordInput
        value={data.confirmPassword}
        onChange={(e) => inputObjStateChange(e, 'confirmPassword', setData)}
        placeholder="confirm password"
      />
      <button>Sign up</button>
      <button type="button" onClick={() => setTab(1)}>
        Already have an account?
      </button>
    </form>
  );
}
