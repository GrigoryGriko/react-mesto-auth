import React from 'react';


function Register() {
  return (
    <div>
      <form>
        <div>
          <h2>Регистрация</h2>

          <input
            placeholder="Email"
          >

          </input>

          <input
            placeholder="Пароль"
          >

          </input>

          <button>Зарегистрироваться</button>

          <a href="/sign-in">Уже зарегистрированы? Войти</a>
        </div>
      </form>
    </div>
  )
}

export default Register;