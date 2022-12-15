import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UseCartContext } from "../../components/context/cart.context";
import { UseContext } from "../../components/context/user.context";
import { SignOutUser } from "../../utiles/firebase/firebase.utiles";


import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = UseContext();
  const {isCartOpen}=UseCartContext()
  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" to='/' onClick={SignOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {
          isCartOpen && <CartDropdown/> 
        }
        
      </div>
      <Outlet />{" "}
      {/*Outlet component is define in the parent routing component */}
    </Fragment>
  );
};

export default Navigation;
