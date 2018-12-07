import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_ARTICLE_ERRORS } from '../actions/article_actions';

const _defaultState = {
  session: [],
  articles: []
};

const errorsReducer = (errorsState = _defaultState, action) => {
  Object.freeze(errorsState, action);
  const newErrorsState = Object.assign([], errorsState);

  switch (action.type) {
  case RECEIVE_SESSION_ERRORS:
    newErrorsState.session = [action.errors];
    return newErrorsState;

  case RECEIVE_ARTICLE_ERRORS:
    newErrorsState.articles = [action.errors];
    return newErrorsState;
    
  default:
    return errorsState;
  }
};

export default errorsReducer;