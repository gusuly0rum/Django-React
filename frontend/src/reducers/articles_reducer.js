import { RECEIVE_ARTICLES, RECEIVE_ARTICLE, REMOVE_ARTICLE } from '../actions/article_actions';

const _defaultState = {};

const articlesReducer = (articlesState = _defaultState, action) => {
  Object.freeze(articlesState);

  switch (action.type) {
  case RECEIVE_ARTICLES:
    return {
      ...articlesState,
      ...action.articles
    };

  case RECEIVE_ARTICLE:
    return {
      ...articlesState,
      ...action.article
    };

  case REMOVE_ARTICLE:
    const newArticlesState = { ...articlesState };
    delete newArticlesState[action.articleId];
    return newArticlesState;

  default:
    return articlesState;
  }
};

export default articlesReducer;