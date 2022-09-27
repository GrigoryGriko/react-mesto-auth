function Header(props) {
  return (
    <header className="header section">
      <a className="logo" href="#"></a>

      <div className="header__wrapper-auth">
        <p className="header__email">{props.userData.email}</p>
        <p to="/sign-in" className="header__logout">Выйти</p>
      </div>
    </header>
  )
}

export default Header;
