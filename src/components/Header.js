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
    
        <header className="header section">
          <a className="logo" href="#"></a>

          <div className="header__wrapper-auth">
          <Switch>
            <Route path='/'>
              <p className="header__email">{props.userData.email}</p>
              <button onClick={signOut} to="/sign-in" className="header__action-auth">Выйти</button>
            </Route>

            <Route>
              <Link to="/sign-in" className="header__action-auth">Вход</Link>
            </Route>

            <Route>
              <Link to="/sign-up" className="header__action-auth">Регистрация</Link>
            </Route>
          </Switch>
          </div>
        </header>
  )
}

export default Header;
