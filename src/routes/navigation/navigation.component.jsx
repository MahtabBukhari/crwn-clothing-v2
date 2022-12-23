import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UseCartContext } from "../../components/context/cart.context";

import { SignOutUser } from "../../utiles/firebase/firebase.utiles";

//styled-component styles is used for more accurate and to avoid human error and also css and sass class name clashes
import { LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from "./navigation.styles";
import { useSelector } from "react-redux";
import { selectorCurrentUser } from "../../store/user/user.selector";



const Navigation = () => {

  const currentUser = useSelector(state=>selectorCurrentUser(state))
 
  const {isCartOpen}=UseCartContext()
  

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={SignOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinksContainer>
        {
          isCartOpen && <CartDropdown/> 
        }
        
      </NavigationContainer>
      <Outlet />{" "}
      {/*Outlet component is define in the parent routing component */}
    </Fragment>
  );
};

export default Navigation;
