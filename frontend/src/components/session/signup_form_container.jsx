import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    error: state.errors.session[0]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (formUser) => dispatch(signupUser(formUser))
  }
};

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignupForm);
export default SignupFormContainer;