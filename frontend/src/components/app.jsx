import React from 'react';
import Outline from './outline/outline';
import { Route, Switch } from 'react-router-dom';
import ArticleFormContainer from './articles/article_form_container';
import ArticlesListContainer from './articles/articles_list_container';
import ArticleDetailContainer from './articles/article_detail_container';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Outline>
          <Switch>
            <Route exact path="/articles" component={ArticlesListContainer} />
            <Route exact path="/articles/create" component={ArticleFormContainer} />
            <Route exact path="/articles/:articleId" component={ArticleDetailContainer} />
          </Switch>
        </Outline>
      </div>
    );
  }
}
export default App;