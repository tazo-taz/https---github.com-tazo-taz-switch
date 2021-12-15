import React from 'react';
import { CenteredDiv, FullScreenFixed, PushRight } from './styledComponents';

const modalStyle = {
  minWidth: 300,
  padding: 15,
  background: 'white',
  borderRadius: 3,
  boxShadow: '0 0 10px #00000045',
};

export default function SimpleModal({ open, setOpen, children = '', onSave = () => {} }) {
  const close = () => setOpen(false);

  if (!open) return '';
  return (
    <>
      <FullScreenFixed onClick={close}></FullScreenFixed>
      <CenteredDiv style={modalStyle}>
        {children}
        <PushRight>
          <button onClick={close}>Cancle</button>
          <button onClick={onSave}>Save</button>
        </PushRight>
      </CenteredDiv>
    </>
  );
}
