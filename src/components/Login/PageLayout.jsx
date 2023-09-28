import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import './PageLayout.css'

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../Buttons/SignInButton";
// import { SignOutButton } from "../Buttons/SignOutButton";
// import PokemonButton from "../Buttons/PokemonsButton";
// import MainContent from "../Profile/Profile";


import { Routes, Route } from "react-router-dom";
import Layout from "../../Pages/Layout";
import PokemonList from "../../Pages/PokemonList";

/*
If user Sign In it shows MainContent, otherwise it shows Login requirement
*/

export const PageLayout = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {isAuthenticated ?
        <div className="content-section">
          <Routes>
            <Route path="/" element={<Layout />}> </Route>
            <Route path="/pokemones" element={<PokemonList />}></Route>
          </Routes>
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