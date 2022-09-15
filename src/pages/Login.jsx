// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "../constants";

export default function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseError = (error) => {
    console.log(error);
  };
  console.log(CLIENT_ID);
  return (
    <>
      <div>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleLogin
            buttonText="Sgin in & Authorize Calendar"
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePoicy={"single_host_origin"}
            //아래 중요
            responseType="code"
            accessType="offline"
            scope="openid email profile https://www.gooleapis.com/auth/calendar"
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
}
