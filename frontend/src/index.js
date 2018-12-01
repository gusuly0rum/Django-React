import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as serviceWorker from './serviceWorker';
import { fetchArticles, fetchArticle } from './actions/article_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootElement = document.getElementById('root');

  window.store = store;
  window.dispatch = store.dispatch;
  window.fetchArticle = fetchArticle;
  window.fetchArticles = fetchArticles;

  ReactDOM.render(<Root store={store} />, rootElement);
});

serviceWorker.unregister();