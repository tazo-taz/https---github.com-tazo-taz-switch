import './App.css';
import './bootstrap.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import MyRoute from './defaultComponents/MyRoute';
import { useEffect } from 'react';
import { setUserFunc } from './functions/auth';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './pages/noAuth/auth';
import Main from './pages/onAuth/main';
import { getMyNumbersFunc } from './functions/numbers';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    setUserFunc(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getMyNumbersFunc(dispatch, user ? null : []);
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <MyRoute path="/" exact components={[user ? Main : Auth]} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
