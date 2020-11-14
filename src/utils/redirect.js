export const redirectToLogin = () => {
    window.location.href = `${process.env.REACT_APP_AUTH_URL}/`;
};

export const redirectToRegister = () => {
    window.location.href = `${process.env.REACT_APP_AUTH_URL}/register`;
};
