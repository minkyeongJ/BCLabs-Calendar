// import { GoogleLogin } from "react-google-login";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  CLIENT_ID,
  AUTHORIZE_URI,
  SCOPE_LIST,
  BASE_URL,
  CALENDAR_ID,
} from "../../constants";
import qs from "qs";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import * as S from "./Styles";

const queryStr = qs.stringify({
  client_id: CLIENT_ID,
  redirect_uri: window.location.href,
  response_type: "token",
  scope: SCOPE_LIST,
});

const loginUrl = AUTHORIZE_URI + "?" + queryStr;

console.log(loginUrl);

export default function Login() {
  const { access_token } = qs.parse(window.location.hash.substr(1));
  localStorage.setItem("access_token", access_token);
  const [calendarDatas, setCalendarDatas] = useState([]);

  const reqURL = `${BASE_URL}/${CALENDAR_ID}/events`;
  useEffect(() => {
    try {
      axios
        .get(reqURL, {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        })
        .then((response) => setCalendarDatas(response.data));
    } catch (error) {
      console.log(error);
    }
  }, [access_token, reqURL]);

  if (!access_token) {
    window.location.assign(loginUrl);
    return null;
  }

  console.log(calendarDatas);

  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseError = (error) => {
    console.log(error);
  };
  console.log(CLIENT_ID);
  return (
    <>
      <S.Section>
        <S.Div>
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
              clientId={CLIENT_ID}
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
        </S.Div>
      </S.Section>
    </>
  );
}
