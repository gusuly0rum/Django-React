import React from 'react';
import Outline from './outline/outline';
import { Route } from 'react-router-dom';
import ArticlesListContainer from './articles/articles_list_container';
// import ArticleDetailContainer from './articles/article_detail_container';

const App = () => {
  return (
    <div id="app">
      <Outline>
        <Route exact path="/" component={ArticlesListContainer} />
        {/* <Route exact path="/:articleId" component={ArticleDetailContainer} /> */}
      </Outline>
    </div>
  );
}

export default App;