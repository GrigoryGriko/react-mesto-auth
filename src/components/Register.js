import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as auth from '../auth.js';

class Register extends React.Component {
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
    e.preventDefault()
    const { password, email } = this.state;
    auth.register(password, email).then((res) => {
      if (res) {
        this.setState({
          message: ''
        }, () => {
          this.props.history.push('/sign-in');
        })
      } else {
        this.setState({
          message: 'Что-то пошло не так!'
        })
      }
    });
  }

  render() {
    return (
      <main className="auth">
        <form
          className="auth__form"
          onSubmit={this.handleSubmit}
        >
          <h2 className="auth__header">Регистрация</h2>

          <input
            name="email"
            className="auth__input-email general-input-auth"
            placeholder="Email"
            type="text"
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

          <button className="auth__button-submit">Зарегистрироваться</button>

          <Link to="/sign-in" className="auth__link">Уже зарегистрированы? Войти</Link>
        </form>
      </main>
    )
  }
}

export default withRouter(Register);