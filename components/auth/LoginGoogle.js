import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from "next/dynamic";
import GoogleLogin from 'react-google-login';
//import { gapi } from 'gapi-script';
//const {gapi} =require ('gapi-script');
 //const gapi2 = dynamic(() => import("gapi-script"), { ssr: false });
//import { gapi } from 'gapi-cjs';
import { loginWithGoogle, authenticate, isAuth } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';
import { auth, googleAuthProvider,FacebookAuthProvider } from '../../firebase';
import Button from 'reactstrap/lib/Button';
//import SocialButton from "./SocialButton";
// const {gapi}=gapi2;
const LoginGoogle = () => {
    // useEffect(() => {
    //     const initClient = () => {
    //           gapi.client.init({
    //           clientId:{GOOGLE_CLIENT_ID},
    //           scope: ''
    //         });
    //      };
    //      gapi.load('client:auth2', initClient);
    //  });

     const googleLogin = async () => {
        auth
          .signInWithPopup(googleAuthProvider)
          .then(async (result) => {
          console.log(result)
        //  console.log(resul)
            const { user } = result;
          //  console.log(user.email)
           // console.log(user.displayName)
            const idTokenResult = await user.getIdTokenResult();
            console.log(idTokenResult)
            // const post = (await axios.post("/api/users/crateuser", {email:user.email,dname:user.displayName}));
            // console.log(post.data);
            // localStorage.setItem("currentUser", JSON.stringify(post.data));
            // window.location.href = "/home";
            // const user = {
            //     email: user.email,
            //     name: user.displayName,
            //     token: idTokenResult.token,
            // }
               const user2 = { idTokenResult };
               console.log(user2);
            loginWithGoogle(user2).then(data => {
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
           
          })
          .catch((err) => {
            console.log(err);
         
          });
      };

    // const responseGoogle = response => {
    //      console.log(response);
    //     const tokenId = response.tokenId;
    //     const user = { tokenId };

    //     loginWithGoogle(user).then(data => {
    //         if (data.error) {
    //             console.log(data.error);
    //         } else {
    //             authenticate(data, () => {
    //                 if (isAuth() && isAuth().role === 1) {
    //                     Router.push(`/admin`);
    //                 } else if (isAuth() && isAuth().role === 2) {
    //                     Router.push(`/user`);
    //                 }else{
    //                     Router.push(`/viewer`);
    //                 }
    //             });
    //         }
    //     });
    // };

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
         <Button
            onClick={googleLogin}
            className="btn btn-danger btn-lg btn-block"
            style={{ backgroundColor: '#dd4b39' }}
        >
           Login with Google
        </Button>
        </div>
    );
};

export default LoginGoogle;
