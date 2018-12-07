import * as ArticleAPI from '../apis/article_api';

export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE_ERRORS = 'RECEIVE_ARTICLE_ERRORS';

export const removeArticle = (articleId) => {
  return {
    type: REMOVE_ARTICLE,
    articleId
  }
};

export const receiveArticle = (article) => {
  return {
    type: RECEIVE_ARTICLE,
    article
  }
};

export const receiveArticles = (articles) => {
  return {
    type: RECEIVE_ARTICLES,
    articles
  }
};

export const receiveArticleErrors = (errors) => {
  return {
    type: RECEIVE_ARTICLE_ERRORS,
    errors
  }
};

export const fetchArticles = () => (dispatch) => {
  return ArticleAPI.fetchArticles().then(response => {
    dispatch(receiveArticles(response.data));
  });
};

export const fetchArticle = (articleId) => (dispatch) => {
  return ArticleAPI.fetchArticle(articleId).then(response => {
    dispatch(receiveArticle(response.data));
  });
};

export const createArticle = (formArticle) => (dispatch) => {
  return ArticleAPI.createArticle(formArticle).then(
    response => dispatch(receiveArticle(response.data)),
    errors => dispatch(receiveArticleErrors(errors.responseJSON))
  );
};

export const updateArticle = (articleId, formArticle) => (dispatch) => {
  return ArticleAPI.updateArticle(articleId, formArticle).then(
    response => dispatch(receiveArticle(response.data)),
    errors => dispatch(receiveArticleErrors(errors.responseJSON))
  );
};

export const deleteArticle = (articleId) => (dispatch) => {
  return ArticleAPI.deleteArticle(articleId).then(response => {
    dispatch(removeArticle(response.data));
  });
};