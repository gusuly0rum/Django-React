import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { createArticle } from '../../actions/article_actions';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (formArticle) => dispatch(createArticle(formArticle))
  }
}

const ArticleFormContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
export default ArticleFormContainer;