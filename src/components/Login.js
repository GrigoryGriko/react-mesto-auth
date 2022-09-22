import React from 'react';


function Login() {
  return (
    <main className="sign-form">
      <form className="sign-form__form">
        <h2 className="sign-form__header">Вход</h2>

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

        <button className="sign-form__button-submit">Войти</button>
      </form>
    </main>
  )
}
export default Login;