import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { default as CartIcon } from '../cart-icon/cart-icon.container';
import { default as CardDropDown } from '../cart-dropdown/cart-dropdown.container';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
      </OptionLink>
        <OptionLink to="/contact">
          CONTACT
      </OptionLink>
        {console.log('current user', currentUser)}

        {currentUser && currentUser.id !== 'undefined' ?
          <OptionLink to="/" as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
          :
          <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon />
        {hidden ? null : <CardDropDown />}
      </OptionsContainer>
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);