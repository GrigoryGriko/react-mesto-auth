export const BASE_URL = 'https://auth.nomoreparties.co';

/*export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
  .catch(err => console.log(err))
};*/

function _getResponseData(signUpIn, password, email) {
  return fetch(`${BASE_URL}/${signUpIn}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (signUpIn === 'signin' && data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    }
    else {
      return data;
    }
  })
  .catch((err) => console.log(err));
}

export const register = (password, email) => {
  _getResponseData('signup', password, email);
}

export const authorize = (password, email) =>  {
  _getResponseData('signin', password, email);
}