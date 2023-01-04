import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import GoogleLogin from 'react-google-login';
import { loginWithGoogle, authenticate, isAuth } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';
import SocialButton from "./SocialButton";
const LoginGoogle = () => {
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
                    } else {
                        Router.push(`/user`);
                    }
                });
            }
        });
    };

    return (
        <div className="pb-3">
             <SocialButton
      provider="google"
      appId="ss"
      
      onLoginSuccess={responseGoogle}
      onLoginFailure={responseGoogle}
    >
      Login with Google
    </SocialButton>
            {/* <GoogleLogin
                clientId=''
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                theme="dark"
            /> */}
        </div>
    );
};

export default LoginGoogle;
