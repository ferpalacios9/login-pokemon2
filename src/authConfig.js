import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "e88fac75-fc05-4c91-962f-e52122933d55",
        authority: "https://login.microsoftonline.com/f1fa4f68-2693-47b9-96ac-1464ba38f0ca",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

/**
 * Scopes you added here will be prompted for user consent during sign-in.
 */
export const loginRequest = {
    scopes: ["User.Read" ]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};