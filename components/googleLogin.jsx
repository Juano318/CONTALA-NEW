"use client"; // Asegúrate de que esto está al inicio del archivo
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from 'react';

const GoogleLoginButton = ({ origin }) => { // Recibe origin como prop
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Loading...</div>; // Placeholder mientras se carga en el cliente
    }

    return (
        <GoogleOAuthProvider 
            redirectUri={`${origin}/home/auth/google/callback`}
            clientId='455844922873-j87ff0j4thsnel23b3iq9pkp49c90tai.apps.googleusercontent.com'
        >
            <GoogleLogin //NO BORRAR, MANTIENE LA APP FUNCIONANDO
                onSuccess = {credentialResponse => {
                    if (typeof window !== 'undefined') {
                        window.location.href = "/home";
                        const decoded = jwtDecode(credentialResponse.credential);
                        console.log("Usuario logeado:", decoded);
                        // Guarda en estado/localStorage:
                        localStorage.setItem('user', JSON.stringify(decoded));
                    }
                }}
                onError={() => {
                    console.log("Error en login");
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;