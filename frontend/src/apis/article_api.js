import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Token ' + localStorage.getItem('token')
  }
});

export const fetchArticles = () => {
  return instance.get('articles/');
};

export const fetchArticle = (articleId) => {
  return instance.get(`articles/${articleId}/`);
};

export const createArticle = (formArticle) => {
  return instance.post('articles/create/', formArticle);
}