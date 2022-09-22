import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
    //обработка логики регистрации
  }

  render() {
    return (
      <main className="sign-form">
        <form
          className="sign-form__form"
          onSubmit={this.handleSubmit}
        >
          <h2 className="sign-form__header">Регистрация</h2>

          <input
            id="email"
            className="sign-form__input-email general-input-sign-form"
            placeholder="Email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          >

          </input>

          <input
            id="password"
            className="sign-form__input-password general-input-sign-form"
            placeholder="Пароль"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          >

          </input>

          <button className="sign-form__button-submit">Зарегистрироваться</button>

          <a href="/sign-in" className="sign-form__link">Уже зарегистрированы? Войти</a>
        </form>
      </main>
    )
  }
}

export default Register;