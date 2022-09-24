import React from 'react';

import * as auth from '../auth.js';



class Login extends React.Component {
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
    console.log(this.state.email);
    console.log(this.state.password);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.password || !this.state.username) {
      console.log(12);
      return;
    }
    auth.authorize(this.state.password, this.state.username)
    .then((data) => {
      if (data.jwt) {
        this.setState({email: '', password: ''}, () => {
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
        <form 
          className="auth__form"
          onSubmit={this.handleSubmit}
        >
          <h2 className="auth__header">Вход</h2>

          <input
            name="email"
            className="auth__input-email general-input-auth"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          >

          </input>

          <input
            name="password"
            className="auth__input-password general-input-auth"
            placeholder="Пароль"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          >

          </input>

          <button className="auth__button-submit">Войти</button>
        </form>
      </main>
    )
  }
}
export default Login;