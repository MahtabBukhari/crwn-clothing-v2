import styled from "styled-components";
import Button, { BUTTONTYPE_OF_CLASSES } from "../button/button.component";

export const PaymentFormContainer = styled.div`
    
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


`

export const FormPayment = styled.form`

height:100px;
min-width:500px;
`


export const FormButton = styled(Button)`

margin-top:30px;
margin-left:auto;

`