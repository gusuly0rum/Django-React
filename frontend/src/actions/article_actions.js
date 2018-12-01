import * as ArticleAPI from '../apis/article_api';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export const receiveArticles = (articles) => {
  return {
    type: RECEIVE_ARTICLES,
    articles
  }
};

export const receiveArticle = (article) => {
  return {
    type: RECEIVE_ARTICLE,
    article
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