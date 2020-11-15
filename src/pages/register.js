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
} from '../styles/auth.styled';
import { ReactComponent as Slash } from '../assets/svg/slash.svg';
import { emailAuthSignUp } from '../service/singIn';
import { SignUpWithGIcon, SignUpWithFBIcon } from './../components/signInBtn';
import img from './../assets/img/1.png';
const RegisterPage = () => {
    const [email, setUserName] = useState('');

    return (
        <Wrapper>
            <Left>
                <LoginImage alt="login img" src={img}></LoginImage>
            </Left>
            <Right>
                <RightWrapper>
                    <NavBar>
                        <NavItem to="/login">Login</NavItem>
                        <SelectedNavItem to="/register">
                            Register
                        </SelectedNavItem>
                    </NavBar>
                    <Label>Your Email</Label>
                    <FormWrapper>
                        <FormInput
                            placeholder="Email"
                            value={email}
                            onChange={(event) =>
                                setUserName(event.target.value)
                            }
                        />
                    </FormWrapper>
                    <ActionButton onClick={() => emailAuthSignUp(email)}>
                        Register
                    </ActionButton>
                    <ORWrapper>
                        <O>O</O>
                        <R>R</R>
                    </ORWrapper>
                    <IconTray>
                        <div>
                            <SignUpWithGIcon />
                        </div>
                        <SlashWrapper>
                            <Slash />
                        </SlashWrapper>
                        <div>
                            <SignUpWithFBIcon />
                        </div>
                    </IconTray>
                </RightWrapper>
            </Right>
        </Wrapper>
    );
};

export default RegisterPage;
