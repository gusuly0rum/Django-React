import React from 'react';
import { connect } from 'react-redux';
import Outline from './outline/outline';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ArticleFormContainer from './articles/article_form_container';
import ArticlesListContainer from './articles/articles_list_container';
import ArticleDetailContainer from './articles/article_detail_container';
import { autoLogin, logoutUser } from '../actions/session_actions';

class App extends React.Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    return (
      <div id="app">
        <Outline {...this.props}>
          <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/articles" component={ArticlesListContainer} />
            <Route exact path="/articles/create" component={ArticleFormContainer} />
            <Route exact path="/articles/:articleId" component={ArticleDetailContainer} />
          </Switch>
        </Outline>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.session.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));