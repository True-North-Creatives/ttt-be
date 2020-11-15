import React, { useState } from 'react';
import {
    Wrapper,
    Left,
    Right,
    LoginImage,
    NavBar,
    NavItem,
    SelectedNavItem,
    FormInput,
    FormWrapper,
    RightWrapper,
    Label,
    ActionButton,
    O,
    R,
    ORWrapper,
    SlashWrapper,
    IconTray,
    ActionLink,
} from '../styles/auth.styled';
import img from './../assets/img/1.png';
import { SignInWithGIcon, SignInWithFBIcon } from './../components/signInBtn';
import { ReactComponent as Slash } from '../assets/svg/slash.svg';
import { emailAuthSingIn } from '../service/singIn';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <Wrapper>
            <Left>
                <LoginImage alt="login img" src={img}></LoginImage>
            </Left>
            <Right>
                <RightWrapper>
                    <NavBar>
                        <SelectedNavItem to="/login">Login</SelectedNavItem>
                        <NavItem to="/register">Register</NavItem>
                    </NavBar>
                    <Label>Your Email</Label>
                    <FormWrapper>
                        <FormInput
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <FormInput
                            placeholder="Password"
                            style={{ marginTop: '15px' }}
                            value={pass}
                            onChange={(event) => setPass(event.target.value)}
                        />
                        <ActionLink to="/forgot">Reset Password</ActionLink>
                    </FormWrapper>
                    <ActionButton onClick={() => emailAuthSingIn(email, pass)}>
                        SIGN IN
                    </ActionButton>
                    <ORWrapper>
                        <O>O</O>
                        <R>R</R>
                    </ORWrapper>
                    <IconTray>
                        <div>
                            <SignInWithGIcon />
                        </div>
                        <SlashWrapper>
                            <Slash />
                        </SlashWrapper>
                        <div>
                            <SignInWithFBIcon />
                        </div>
                    </IconTray>
                </RightWrapper>
            </Right>
        </Wrapper>
    );
};

export default LoginPage;
