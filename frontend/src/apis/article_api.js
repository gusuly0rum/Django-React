import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Token ' + localStorage.getItem('token')
  }
});

export const fetchArticles = () => {
  return axios.get('http://localhost:8000/api/articles/');
};

export const fetchArticle = (articleId) => {
  return axios.get(`http://localhost:8000/api/articles/${articleId}/`);
};

export const createArticle = (formArticle) => {
  return Axios.post('articles/create/', formArticle);
}