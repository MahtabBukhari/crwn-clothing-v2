import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UseContext } from "../../components/context/context.component";
import { SignOutUser } from "../../utiles/firebase/firebase.utiles";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = UseContext();
  const handleUserSignOut = async () => {
    await SignOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shope">
            Shope
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth" onClick={handleUserSignOut}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />{" "}
      {/*Outlet component is define in the parent routing component */}
    </Fragment>
  );
};

export default Navigation;
