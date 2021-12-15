import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function Index() {
  const [tab, setTab] = useState(0);

  const tabComponents = {
    0: <SignUp setTab={setTab} />,
    1: <SignIn setTab={setTab} />,
  };
  return <>{tabComponents[tab]}</>;
}
