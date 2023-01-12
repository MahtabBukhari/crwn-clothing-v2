import React, { useState } from "react";
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js";
import { BUTTONTYPE_OF_CLASSES } from "../button/button.component";
import { FormButton, FormPayment, PaymentFormContainer } from "./payment-stripe.styles";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { selectorCurrentUser } from "../../store/user/user.selector";

const PaymentStripe = () => {
  const [isProcessingPayment,setIsProcessingPayment]=useState(false)
  const stripe = useStripe()
  const elements= useElements()
  const amount = useSelector(selectCartTotal) 
  const currentUser = useSelector(selectorCurrentUser)
  const paymnetHandler= async(event)=>{
    event.preventDefault()
    if(!stripe || !elements){
      return
    }
    setIsProcessingPayment(true)
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({amount:amount * 100})
    }).then(res=>res.json())

const {client_secret}=response


const paymentResult= await stripe.confirmCardPayment(client_secret,{
  payment_method:{
    card:elements.getElement(CardElement),
    billing_details:{
      name:currentUser? currentUser.displayName:'Guest'
    }
  }
})

setIsProcessingPayment(false)

if(paymentResult.error){
  alert('payment error')
}else{

  if(paymentResult.paymentIntent.status === 'succeeded'){
    alert('payment successfully')
  }

}


  }
  return (
    <PaymentFormContainer>
      <FormPayment onSubmit={paymnetHandler}>
        <CardElement />
        <FormButton isLoading={isProcessingPayment} buttonType={BUTTONTYPE_OF_CLASSES.base}>Pay Now</FormButton>
      </FormPayment>
    </PaymentFormContainer>
  );
};

export default PaymentStripe;
