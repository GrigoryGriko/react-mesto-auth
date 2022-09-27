import React from 'react';
import { Link, useHistory, Switch, Route } from 'react-router-dom';

function Header(props) {
  const history = useHistory();
  
  function signOut(e) {
    e.preventDefault();
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }

  return (
    <Switch>
      <Route path='/'>
        <header className="header section">
          <a className="logo" href="#"></a>

          <div className="header__wrapper-auth">
            <p className="header__email">{props.userData.email}</p>
            <button onClick={signOut} to="/sign-in" className="header__action-auth">Выйти</button>
          </div>
        </header>
      </Route>

      <Route path='/sign-up'>
        <header className="header section">
          <a className="logo" href="#"></a>

          <div className="header__wrapper-auth">
            <Link to="/sign-ip" className="header__action-auth">Вход</Link>
          </div>
        </header>
      </Route>

      <Route path='/sign-in'>
        <header className="header section">
          <a className="logo" href="#"></a>

          <div className="header__wrapper-auth">
            <Link to="/sign-up" className="header__action-auth">Регистрация</Link>
          </div>
        </header>
      </Route>
    </Switch>
  )
}

export default Header;
