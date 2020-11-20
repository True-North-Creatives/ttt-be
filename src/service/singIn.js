import axios from 'axios';

export const signIn = async (payload) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/signin`,
        { ...payload },
        { withCredentials: true }
    );
    console.log(res, 'signIn', res.status);
    if (res.status === 200 && res.data.error && res.data.error.code === 101) {
        //account doesn't exist, registering it
        signUp(payload);
        return;
    }
    if(res.status === 200 && res.data.code === 104) {
        window.location.href = `${process.env.REACT_APP_HOMEPAGE}/payment`
        return;
    }
    //after signin take to app
    window.location.href = `${process.env.REACT_APP_USER_APP}`;
};

export const signUp = async (payload) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/signup`,
        { ...payload },
        { withCredentials: true }
    );
    console.log(res.data, 'signIn');
    if (
        res.status === 400 &&
        res.data.message &&
        res.data.message === 'Email already taken'
    ) {
        //account already exist, logining in now
        signIn(payload);
        return;
    }
    //after signup take to payment page
    window.location.href = `${process.env.REACT_APP_HOMEPAGE}/payment`;
};

export const emailAuthSignUp = async (email) => {
    if (email === '') {
        return;
    }
    const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/signup`,
        {
            email,
            providerId: 'EMAIL',
        },
        { withCredentials: true }
    );
    console.log(data, 'signUp');
    window.location.href = `${process.env.REACT_APP_HOMEPAGE}/payment`;
};

export const emailAuthSingIn = async (email, pass) => {
    if (email === '' || pass === '') {
        return;
    }
    const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/signin`,
        { email, pass },
        { withCredentials: true }
    );
    console.log(data, 'signIn');
    window.location.href = `${process.env.REACT_APP_USER_APP}`;
};
