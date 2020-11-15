import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { GoogleIcon, FbIcon } from '../styles/auth.styled';
import { signIn, signUp } from '../service/singIn';

const signUpFB = (result) => {
    console.log('result', result);
};
const signInFB = (result) => {
    const { email, last_name: familyName, first_name: givenName, name, picture: {data: {url: imageUrl}} } = result;
    console.log('Hello', email, familyName, givenName, name,imageUrl);
    signIn({ email, familyName, givenName, name,imageUrl, providerId: 'FACEBOOK' });
};

const signInGoogle = (result) => {
    const payload = result.profileObj;
    signIn({ ...payload, providerId: 'GOOGLE' });
};

const signUpGoogle = (result) => {
    console.log('result', result);
    const payload = result.profileObj;
    signUp({ ...payload, providerId: 'GOOGLE' });
};

export const SignUpWithFBIcon = () => (
    <FacebookLogin
        appId="403021394024503"
        callback={signUpFB}
        render={(renderProps) => <FbIcon onClick={renderProps.onClick} />}
        fields="name,email,picture,first_name,last_name"
    />
);

export const SignUpWithGIcon = () => (
    <GoogleLogin
        clientId="207571685786-eh675tr5hj8de0cfu4pp9vu6n00s515c.apps.googleusercontent.com"
        onSuccess={signUpGoogle}
        render={(renderProps) => (
            <GoogleIcon
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
            />
        )}
    />
);

export const SignInWithFBIcon = () => (
    <FacebookLogin
        appId="403021394024503"
        callback={signInFB}
        fields="name,email,picture,first_name,last_name"
        render={(renderProps) => <FbIcon onClick={renderProps.onClick} />}
    />
);

export const SignInWithGIcon = () => (
    <GoogleLogin
        clientId="207571685786-eh675tr5hj8de0cfu4pp9vu6n00s515c.apps.googleusercontent.com"
        onSuccess={signInGoogle}
        render={(renderProps) => (
            <GoogleIcon
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
            />
        )}
    />
);
