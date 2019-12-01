import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions.js';

import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
    // this.setState({ [name]: value });
  }

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          onChange={handleChange}
          required />
        <FormInput
          type="password"
          id="password"
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
          required />
        <ButtonsContainer>
          <CustomButton type="submit" value="Submit form" >Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn value="Submit form" >Sign in with Google</CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);