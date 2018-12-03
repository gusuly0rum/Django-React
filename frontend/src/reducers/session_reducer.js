import { RECEIVE_LOGIN, RECEIVE_LOGOUT } from '../actions/session_actions';

const _defaultState = { token: null };

const sessionReducer = (sessionState = _defaultState, action) => {
  Object.freeze(sessionState);

  switch (action.type) {
  case RECEIVE_LOGIN:
    return action.token;
  
  case RECEIVE_LOGOUT:
    return _defaultState;

  default:
    return sessionState;
  }
};

export default sessionReducer;