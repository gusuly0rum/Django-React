import React from 'react';
import { Card, Button } from 'antd';
import ArticleFormContainer from './article_form_container';


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: {}, isUpdate: false };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const articleId = this.props.match.params.articleId
    this.props
      .fetchArticle(articleId)
      .then(() => this.setState({ article: this.props.article }));
  }

  componentWillReceiveProps(newProps) {
    this.setState({ article: newProps.article, isUpdate: false });
  }

  handleUpdate() {
    if (this.state.isUpdate) {
      this.setState({ article: this.state.article, isUpdate: false });
    } else {
      this.setState({ article: this.state.article, isUpdate: true });
    }
  }

  handleDelete() {
    const articleId = this.props.match.params.articleId
    this.props.deleteArticle(articleId)
      .then(() => this.props.history.push('/articles'));
  }

  render() {
    let updateComponent = null;
    if (this.state.isUpdate) updateComponent = <ArticleFormContainer article={this.props.article} />;

    return (
      <div style={{ background: 'white', padding: '30px' }}>
        <Card title={this.state.article.title} bordered={false}>
          <p>{ this.state.article.body }</p>
        </Card>
        <div style={{ margin: '24px 0' }} />
        <Button onClick={this.handleUpdate} style={{ background: 'white', border: 'none', color: 'blue' }}>Edit Article</Button>
        <Button onClick={this.handleDelete} style={{ background: 'white', border: 'none', color: 'blue' }}>Delete Article</Button>
        <div style={{ margin: '24px 0' }} />
        { updateComponent }
      </div>
    )
  }
}

export default ArticleDetail;