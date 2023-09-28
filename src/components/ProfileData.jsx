import React from "react";
import './ProfileData.css';
/*
Renders information about the user obtained from MS Graph 
@param props
*/

export const ProfileData = (props) => {

  const { graphData, email } = props;

  if (props) {
    // console.log(graphData) // O cualquier otro comportamiento que desees si graphData no está definido
    console.log(props);
  }

  return (
    <div id="profile-div">
      <ul className="data-list">
        <li>
          <p>First Name:</p> {graphData.givenName}
        </li>
        <li>
          <p>Last Name:</p> {graphData.surname}
        </li>
        <li>
          <p>Email:</p> {email}
        </li>
      </ul>
    </div>
  );
};