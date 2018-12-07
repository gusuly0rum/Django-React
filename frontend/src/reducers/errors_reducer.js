import { merge } from 'lodash';
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_ARTICLE_ERRORS } from '../actions/article_actions';

const _defaultState = {
  session: {},
  articles: { title: null, body: null }
};

const errorsReducer = (errorsState = _defaultState, action) => {
  Object.freeze(errorsState, action);
  const newErrorsState = merge({}, _defaultState);

  switch (action.type) {
  case RECEIVE_SESSION_ERRORS:
    return newErrorsState;

  case RECEIVE_ARTICLE_ERRORS:
    Object.keys(action.errors).forEach(key => {
      newErrorsState.articles[key] = action.errors[key][0];
    });
    return newErrorsState;
    
  default:
    return errorsState;
  }
};

export default errorsReducer;