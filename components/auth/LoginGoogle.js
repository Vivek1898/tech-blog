import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from "next/dynamic";
import GoogleLogin from 'react-google-login';
//import { gapi } from 'gapi-script';
//const {gapi} =require ('gapi-script');
// const gapi2 = dynamic(() => import("gapi-script"), { ssr: false });
import { gapi } from 'gapi-cjs';
import { loginWithGoogle, authenticate, isAuth } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';
//import SocialButton from "./SocialButton";
// const {gapi}=gapi2;
const LoginGoogle = () => {
    useEffect(() => {
        const initClient = () => {
              gapi.client.init({
              clientId:{GOOGLE_CLIENT_ID},
              scope: ''
            });
         };
         gapi.load('client:auth2', initClient);
     });
    const responseGoogle = response => {
         console.log(response);
        const tokenId = response.tokenId;
        const user = { tokenId };

        loginWithGoogle(user).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else if (isAuth() && isAuth().role === 2) {
                        Router.push(`/user`);
                    }else{
                        Router.push(`/viewer`);
                    }
                });
            }
        });
    };

    return (
        <div className="pb-3">
             {/* <SocialButton
      provider="google"
      appId="ss"
      
      onLoginSuccess={responseGoogle}
      onLoginFailure={responseGoogle}
    >
      Login with Google
    </SocialButton> */}
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                // cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
                theme="dark"
            />
        </div>
    );
};

export default LoginGoogle;
