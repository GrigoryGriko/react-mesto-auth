import React from 'react';


function Login() {
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
export default Login;