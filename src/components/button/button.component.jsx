import './button.styles.scss'
const TYPE_OF_BUTTON={
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({children , buttonType, ...otherProps}) => {
  return (
    <button className={`button-container ${TYPE_OF_BUTTON[buttonType]}`} {...otherProps}>{children}</button>
  )
}

export default Button