import * as SessionAPI from '../apis/session_api';

export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveLogin = (token) => {
  return {
    type: RECEIVE_LOGIN,
    token
  };
};

export const receiveLogout = () => {
  return {
    type: RECEIVE_LOGOUT
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};


export const registerTimeout = () => {
  return (dispatch) => {
    setTimeout(() => dispatch(logoutUser()), 3600 * 1000);
  }
}

export const loginUser = (formUser) => {
  return (dispatch) => {
    SessionAPI.loginUser(formUser)
    .then(response => {
      const token = response.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(receiveLogin(token));
      dispatch(registerTimeout());
    })
    .then(errors => dispatch(receiveSessionErrors(errors)));
  }
}

export const signupUser = (formUser) => {
  return (dispatch) => {
    SessionAPI.signupUser(formUser)
    .then(response => {
      const token = response.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem('token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch(receiveLogin(token));
      dispatch(registerTimeout());
    })
    .then(errors => dispatch(receiveSessionErrors(errors)));
  }
}

export const logoutUser = () => {
  return (dispatch) =>  {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    dispatch(receiveLogout());
  }
}

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logoutUser());
      } else {
        dispatch(receiveLogin(token));
        dispatch(registerTimeout());
      }
    } else {
      dispatch(logoutUser());
    }
  }
}