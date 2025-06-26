import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const GoogleLoginButton = () => {
    return(
        <GoogleOAuthProvider redirectUri={window.location.origin + "/home/auth/google/callback"} clientId='455844922873-j87ff0j4thsnel23b3iq9pkp49c90tai.apps.googleusercontent.com'>
            <GoogleLogin
                onSuccess = {credentialResponse => {
                    window.location.href = "/home";
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log("Usuario logeado:", decoded);
                    // Guarda en estado/localStorage:
                    localStorage.setItem('user', JSON.stringify(decoded));
                }}
                onError={() => {
                    console.log("Error en login");
                }}
            />
        </GoogleOAuthProvider>
    )
}
export default GoogleLoginButton;