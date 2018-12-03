import React from 'react';
import { Card } from 'antd';

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { article: {} }
  }
  componentDidMount() {
    const articleId = this.props.match.params.articleId
    this.props
      .fetchArticle(articleId)
      .then(() => this.setState({ article: this.props.article }));
  }

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title={this.state.article.title} bordered={false} style={{ width: 300 }}>
          <p>{ this.state.article.body }</p>
        </Card>
      </div>
    )
  }
}

export default ArticleDetail