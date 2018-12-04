import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (formUser) => dispatch(signupUser(formUser))
  }
};

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);
export default SignupFormContainer;