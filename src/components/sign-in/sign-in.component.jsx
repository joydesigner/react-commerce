import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions.js';

import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';



class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>

          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required />
          <FormInput
            type="password"
            id="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
            required />
          <ButtonsContainer>
            <CustomButton type="submit" value="Submit form" >Sign in</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn value="Submit form" >Sign in with Google</CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);