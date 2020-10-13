import React from 'react';

function CheckoutSteps(propos){
    return <div className="checkout-steps">
        <div className={propos.step1 ? 'active' : ''}>SingIn</div>
        <div className={propos.step2 ? 'active' : ''}>Shipping</div>
        <div className={propos.step3 ? 'active' : ''}>Payment</div>
        <div className={propos.step4 ? 'active' : ''}>Place Order</div> 
    </div>
}
export default CheckoutSteps