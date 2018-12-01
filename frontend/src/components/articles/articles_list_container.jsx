import { connect } from 'react-redux';
import ArticlesList from './articles_list';
import { fetchArticles } from '../../actions/article_actions';

const mapStateToProps = (state) => {
  return {
    articles: Object.values(state.entities.articles) || []
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticles())
  }
};

const ArticlesListContainer = connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
export default ArticlesListContainer;