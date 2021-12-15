import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function MyRoute({ isAdmin, isModerator, components = [], ...props }) {
  const { user } = useSelector((state) => state);

  const component = (props) => (
    <>
      {components.map((AddComp, b) => (
        <AddComp key={b} {...props} />
      ))}
    </>
  );

  const Redirect = () => <p>redirect</p>;
  if (user === false) return '';
  else if (isAdmin) {
    if (!user) return <Redirect />;
    else if (user.status !== 2) return "You don't have a permission to view this page";
    else return <Route render={component}></Route>;
  } else if (isModerator) {
    if (!user) return <Redirect />;
    else if (user.status < 1) return "You don't have a permission to view this page";
    else return <Route render={component}></Route>;
  } else return <Route render={component}></Route>;
}
