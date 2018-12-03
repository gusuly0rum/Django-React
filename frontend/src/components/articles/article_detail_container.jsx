import { connect } from 'react-redux';
import ArticleDetail from './article_detail';
import { fetchArticle } from '../../actions/article_actions'

const mapStateToProps = (state, pathProps) => {
  const articleId = pathProps.match.params.articleId
  return {
    article: state.entities.articles[articleId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (articleId) => dispatch(fetchArticle(articleId))
  }
}

const ArticleDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
export default ArticleDetailContainer;