import React from 'react';

import * as auth from '../auth.js';



class Login extends React.Componet {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.password || !this.state.username) {
      return;
    }
    auth.authorize(this.state.password, this.state.username)
    .then((data) => {
      if (data.jwt) {
        this.setState({password: '', email: ''}, () => {
          this.props.handleLogin();
          this.props.history.push('/');
        })
      }
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <main className="auth">
        <form className="auth__form">
          <h2 className="auth__header">Вход</h2>

          <input
            name="email"
            className="auth__input-email general-input-auth"
            placeholder="Email"
          >

          </input>

          <input
            name="password"
            className="auth__input-password general-input-auth"
            placeholder="Пароль"
            type="password"
          >

          </input>

          <button className="auth__button-submit">Войти</button>
        </form>
      </main>
    )
  }
}
export default Login;