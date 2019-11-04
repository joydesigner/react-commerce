import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
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
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn value="Submit form" >Sign in with Google</CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;