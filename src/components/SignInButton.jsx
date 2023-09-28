import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import './SignInButton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsMicrosoft } from 'react-icons/bs';

// Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

/*
Renders a drop down button with child buttons for logging in with a popup or redirect
Note the [useMsal] package 
*/

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="container-button">
      <button
        className="button-login"
        onClick={() => handleLogin("popup")}>
        <div className='microsoft-icon'>
          <BsMicrosoft />
        </div>
        LOG IN WITH MICROSOFT

      </button>
    </div>
  );
};

/*

const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  }; 

<DropdownButton
        variant="secondary"
        className="ml-auto"
        drop="start"
        title="Sign In"
      >
        <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>
          Sign in using Popup
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>
          Sign in using Redirect
        </Dropdown.Item>
      </DropdownButton>
*/