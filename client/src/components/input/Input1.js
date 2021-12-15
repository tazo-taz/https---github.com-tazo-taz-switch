import React, { useEffect, useState } from 'react';

export default function Input1({ value, fullWidth, ...props }) {
  const style = fullWidth ? { width: '100%' } : {};
  // state propertishi mgoni es igulisxmet xo rom calce state shemeqna validurobistvis tumca validis nacvlad valuec imushavebda
  const [valid, setValid] = useState(true);
  useEffect(() => {
    setValid(value && true);
  }, [value]);
  return <input value={value} {...props} style={{ border: valid ? '' : '1px solid red', ...style }} />;
}
