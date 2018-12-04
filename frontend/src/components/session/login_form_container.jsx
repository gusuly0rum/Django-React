import LoginForm from './login_form';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (formUser) => dispatch(loginUser(formUser))
  }
};

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginFormContainer;