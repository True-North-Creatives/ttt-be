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
} from '../styles/auth.styled';
import axios from 'axios';
import img from './../assets/img/1.png';
const ForgotPage = () => {
    const [email, setUserName] = useState('');
    const resetPassword = () => {
        const sendMail = async () => {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1/auth/reset`,
                { email },
                { withCredentials: true }
            );
            res.status === 200 && alert('Mail Sent');
            res.status !== 200 && alert(res.data.message);
        };
        sendMail();
    };
    return (
        <Wrapper>
            <Left>
                <LoginImage alt="login img" src={img}></LoginImage>
            </Left>
            <Right>
                <RightWrapper>
                    <NavBar>
                        <SelectedNavItem to="/forgot">Recovery</SelectedNavItem>
                        <NavItem to="/register">Register</NavItem>
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
                    <ActionButton onClick={() => resetPassword(email)}>
                        Reset
                    </ActionButton>
                </RightWrapper>
            </Right>
        </Wrapper>
    );
};

export default ForgotPage;
