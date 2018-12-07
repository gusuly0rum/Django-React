import { connect } from 'react-redux';
import ArticleForm from './article_form';
import { createArticle, updateArticle } from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    article: ownProps.article || { title: '', body: '' },
    isUpdate: Boolean(ownProps.article),
    errors: state.errors.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (formArticle) => dispatch(createArticle(formArticle)),
    updateArticle: (articleId, formArticle) => dispatch(updateArticle(articleId, formArticle))
  }
}

const ArticleFormContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
export default ArticleFormContainer;