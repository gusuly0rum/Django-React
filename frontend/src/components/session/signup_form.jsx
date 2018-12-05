import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirmDirty: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (!errors) this.props.signupUser(values);
    });
    this.props.history.push('/articles');
  }

  handleConfirmBlur = (event) => {
    const value = event.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (_, value, callback) => {
    if (value && value !== this.props.form.getFieldValue('password1')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (_, value, callback) => {
    if (value && this.state.confirmDirty) {
      this.props.form.validateFields(['password2'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }] })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ type: 'email', message: 'The input is not valid email!' }, { required: true, message: 'Please input your email!' }] })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password1', { rules: [{ required: true, message: 'Please input your Password!' }, { validator: this.validateToNextPassword }] })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password2', { rules: [{ required: true, message: 'Please confirm your Password!' }, { validator: this.compareToFirstPassword }] })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur}  />)}
        </FormItem>

        <FormItem>
          <Button type="primary" onClick={this.handleSubmit}>Sign Up</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignupForm = Form.create()(SignupForm);
export default WrappedSignupForm;