import React from 'react';

function Register() {
  return (
    <main className="sign-form">
      <form className="sign-form__form">
        <h2 className="sign-form__header">Регистрация</h2>

        <input
          className="sign-form__input-email general-input-sign-form"
          placeholder="Email"
        >

        </input>

        <input
          className="sign-form__input-password general-input-sign-form"
          placeholder="Пароль"
          type="password"
        >

        </input>

        <button className="sign-form__button-submit">Зарегистрироваться</button>

        <a href="/sign-in" className="sign-form__link">Уже зарегистрированы? Войти</a>
      </form>
    </main>
  )
}

export default Register;