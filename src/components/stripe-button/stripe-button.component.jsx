import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_N8SJcRA2CUY2RyCrNEitF5Lh008aVxbb3b';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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