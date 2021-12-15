import React, { useState } from 'react';
import Input1 from './input/Input1';

export default function PasswordInput(props) {
  const [shown, setShown] = useState(false);
  return (
    <div>
      <Input1 type={shown ? 'text' : 'password'} {...props} />
      <button type="button" onClick={() => setShown((a) => !a)}>
        {shown ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
