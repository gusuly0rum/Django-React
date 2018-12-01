import axios from 'axios';

export const fetchArticles = () => {
  return axios.get('http://localhost:8000/api/articles/');
};

export const fetchArticle = (articleId) => {
  return axios.get(`http://localhost:8000/api/articles/${articleId}/`);
};