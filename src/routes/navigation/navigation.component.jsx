import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shope">
            Shope
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>

      <Outlet /> {/*Outlet component is define in the parent routing component */}
    </Fragment>
  );
};

export default Navigation;
