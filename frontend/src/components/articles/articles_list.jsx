import React from 'react';
import { List, Avatar } from 'antd';

class ArticlesList extends React.Component {

  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.articles}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              title={<a href={`/articles/${item.id}`}>{item.title}</a>}
              description={item.body} />
          </List.Item>
        )}
      />
    )
  }
}

export default ArticlesList;