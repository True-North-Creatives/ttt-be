import React, { useState } from 'react';
import {
    Wrapper,
    Left,
    Right,
    LoginImage,
    NavBar,
    SelectedNavItem,
    FormInput,
    FormWrapper,
    RightWrapper,
    Label,
    ActionButton,
} from '../styles/auth.styled';
import img from './../assets/img/1.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const ResetPage = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState('loading');
    /**
     * @todo
     * failed case
     */
    React.useEffect(() => {
        const verify = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1/auth/reset/${props.match.params.secret}`
            );
            console.log('response', res.data);
            res.data.result && setEmail(res.data.email);
        };
        verify();
    }, [props.match.params.secret]);

    const [pass, setPass] = useState('');

    const resetPassword = async () => {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/v1/auth/update`,
            { token: props.match.params.secret, pass }
        );
        console.log('response', res.data);
        /**
         * @todo
         * notify that you are redirecting to login page
         */
        res.data.updated && history.push('/');
    };
    return (
        <Wrapper>
            <Left>
                <LoginImage alt="login img" src={img}></LoginImage>
            </Left>
            <Right>
                <RightWrapper>
                    <NavBar>
                        <SelectedNavItem onTouchCancelCapture="/reset">
                            Reset Password
                        </SelectedNavItem>
                    </NavBar>
                    <Label>Your Email</Label>
                    <FormWrapper>
                        <FormInput
                            placeholder={email}
                            value={props.match.params.email}
                            disabled
                        />
                        <FormInput
                            placeholder="password"
                            value={pass}
                            type="password"
                            onChange={(event) => setPass(event.target.value)}
                        />
                    </FormWrapper>
                    <ActionButton onClick={resetPassword}>Reset</ActionButton>
                </RightWrapper>
            </Right>
        </Wrapper>
    );
};

export default ResetPage;
