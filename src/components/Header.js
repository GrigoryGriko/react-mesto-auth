import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header(props) {
  const history = useHistory();
  
  function signOut(e) {
    e.preventDefault();
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }
  
  let children;
  React.useEffect(() => {
    

    if (props.loggedIn) {
      children = (
        <>
          <p className="header__email">{props.userData.email}</p>
          <button onClick={signOut} to="/sign-in" className="header__action-auth">Выйти</button>
        </>
      );
    } else {
      children = (
        <>
          <Link to="/sign-up" className="header__action-auth">Регистрация</Link>
        </>
      )
    }
  }, [props.loggedIn]);


  return (
    <header className="header section">
      <a className="logo" href="#"></a>

      <div className="header__wrapper-auth">
        `${children}`
      </div>
    </header>
  )
}

export default Header;
