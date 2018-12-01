import { RECEIVE_ARTICLES, RECEIVE_ARTICLE } from '../actions/article_actions';

const _defaultState = {};

const articlesReducer = (articlesState = _defaultState, action) => {
  Object.freeze(articlesState);

  switch (action.type) {
  case RECEIVE_ARTICLES:
    return action.articles;

  case RECEIVE_ARTICLE:
    return action.article;

  default:
    return articlesState;
  }
};

export default articlesReducer;