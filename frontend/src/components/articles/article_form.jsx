import React from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.article.title,
      body: this.props.article.body
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(inputType) {
    return (event) => {
      this.setState({ [inputType]: event.currentTarget.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.isUpdate) {
      return this.props.updateArticle(this.props.article.id, this.state);
    }
    this.props.createArticle(this.state)
      .then(() => this.props.history.push('/articles'));
  }

  render() {
    return (
      <div>
        <TextArea placeholder="Article title" autosize onChange={this.handleInput('title')} value={ this.state.title } />
        <div style={{ margin: '24px 0' }} />
        <TextArea placeholder="Article body" rows={5} onChange={this.handleInput('body')} value={this.state.body} />
        <div style={{ margin: '24px 0' }} />
        <Button type="primary" block onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

export default ArticleForm;