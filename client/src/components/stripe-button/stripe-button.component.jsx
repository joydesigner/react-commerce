import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_4XXnW1n37moyJMqBzBta0ZAC';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('payment success')
    }).catch(error => {
      console.log('Payment error', JSON.parse(error));
      alert('issue with the payment.');
    })
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Jason's React ECommerce Platform"
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/png/512/552/552788.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;