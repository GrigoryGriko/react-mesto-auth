function Header(props) {
  return (
    <header className="header section">
      <a className="logo" href="#"></a>
      <p>{props.userData.email}</p>
    </header>
  )
}

export default Header;
