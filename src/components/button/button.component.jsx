import { BaseButton, ButtonSpinner, GoogleButton, InvertedButton } from "./button.styles"

export const BUTTONTYPE_OF_CLASSES={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}


const getButton =(buttonType = BUTTONTYPE_OF_CLASSES.base)=>(

  //map object

  {

     [BUTTONTYPE_OF_CLASSES.base] : BaseButton,
     [BUTTONTYPE_OF_CLASSES.google] : GoogleButton,
     [BUTTONTYPE_OF_CLASSES.inverted] : InvertedButton,

  }[buttonType] 


)
const Button = ({children , buttonType,isLoading, ...otherProps}) => {
  const CustomButton=getButton(buttonType)
  
  return (
    <CustomButton disabled={isLoading} {...otherProps}>{isLoading?<ButtonSpinner/>:children}</CustomButton>
  )
}

export default Button