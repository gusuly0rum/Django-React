import axios from 'axios';

export const fetchArticles = () => {
  return axios.get('http://localhost:8000/api/articles/');
};

export const fetchArticle = (articleId) => {
  return axios.get(`http://localhost:8000/api/articles/${articleId}/`);
};

export const createArticle = (formArticle) => {
  return axios.post(
    'http://localhost:8000/api/articles/',
    formArticle
  )
}