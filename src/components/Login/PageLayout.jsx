import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import './PageLayout.css'

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../Buttons/SignInButton";
import { SignOutButton } from "../Buttons/SignOutButton";
import MainContent from "../Profile/Profile";

/*
Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
@param props
*/

export const PageLayout = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {isAuthenticated ?
        <div className="content-section">
          <MainContent />
          <SignOutButton />
        </div> :
        <div className='login-section'>
          <div className='container-login'>
            <div className='header'>
              <div className="text">Log in</div>
              <div className="underline"></div>
            </div>
            <SignInButton />
          </div>
        </div>
      }
    </>
  );
};

/* 
<>
      <Navbar bg="primary" variant="dark" className="navbarStyle">
        <a className="navbar-brand" href="/">
          Microsoft Identity Platform
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
      </Navbar>
      <br />
      <br />
      <h5>
        <center>
          Welcome to the Microsoft Authentication Library For Javascript -
          React SPA Tutorial
        </center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
*/