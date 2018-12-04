import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) this.props.loginUser(values);
    });
    this.props.history.push('/articles');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('username', { rules: [{ required: true, message: 'Please input your username!' }]})(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your Password!' }]})(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
        </FormItem>

        <FormItem>
          <Button type="primary" onClick={this.handleSubmit}>Log in</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);
export default WrappedLoginForm;