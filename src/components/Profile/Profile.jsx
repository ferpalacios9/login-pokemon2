import React, { useState } from 'react';
import { loginRequest } from '../../authConfig';
import { callMsGraph } from '../../graph';
import { ProfileData } from '../ProfileData/ProfileData';

import './Profile.css';

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';



import Button from 'react-bootstrap/Button';

/*
* Renders information about the signed-in user or a button to retrieve data about the user
*/

const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const [email, setEmail] = useState(null);

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then((response) => {
                callMsGraph(response.accessToken)
                    .then((response) => {
                        setGraphData(response);
                        setEmail(accounts[0].username);
                    })
                    .catch((error) => {
                        console.error("Error en la llamada a MS Graph:", error);
                    });
            })
    }

    // Verifica si accounts[0] está definido antes de acceder a la propiedad 'name'
    const accountName = accounts[0] && accounts[0].name;

    return (
        <div className='info-container'>
            <h5 className="card-title">Welcome {accountName}</h5>
            <br />
            {graphData ? (
                <ProfileData graphData={graphData} email={email} />
            ) : (
                <Button variant="secondary" onClick={RequestProfileData}>
                    Visualizar Información
                </Button>
            )}
        </div>
    );
};

/*
If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered. 
*/

const MainContent = () => {
    return (
        <div className='profile-section'>
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5>
                    Ocurrió un error
                </h5>
            </UnauthenticatedTemplate>
        </div>
    );
};

export default MainContent;