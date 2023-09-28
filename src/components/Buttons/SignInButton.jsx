import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import './SignInButton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsMicrosoft } from 'react-icons/bs';

// Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';


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