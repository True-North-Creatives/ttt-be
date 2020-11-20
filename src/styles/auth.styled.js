import styled from 'styled-components';
import { ReactComponent as Google } from '../assets/svg/google.svg';
import { ReactComponent as Fb } from '../assets/svg/fb.svg';
import { Link } from 'react-router-dom';
export const Wrapper = styled.div`
    display: flex;
    background-color: rgb(29, 29, 29);
    min-height: 100vh;
`;

export const Left = styled.div`
    display: none;
    @media (min-width: 768px) {
        width: 50%;
        display: block;
    }
`;

export const Right = styled.div`
    margin-left: auto;
    width: 100%;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const LoginImage = styled.img`
    display: flex;
    margin: auto;
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
    filter: grayscale(1);
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 25%;
    margin-bottom: 10%;
    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;

export const NavItem = styled(Link)`
    font-weight: 700;
    font-style: italic;
    color: rgb(255, 255, 255);
    text-decoration: none;
    line-height: 1.4;
    font-size: 28px;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    cursor: pointer;
`;

export const SelectedNavItem = styled(NavItem)`
    color: rgb(0, 215, 255);
`;

export const FormInput = styled.input.attrs(() => ({}))`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    border-radius: 0.7rem;
    background-color: rgb(0, 0, 0);
    border: none;
    width: 85%;
    font-weight: 700;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
    ::placeholder {
        font-weight: 700;
        font-style: italic;
        color: rgb(255, 255, 255);
        text-decoration: none;
    }
`;

export const FormWrapper = styled.div`
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 15px;
    input:not(:first-child) {
        margin-top: 15px;
    }
`;

export const RightWrapper = styled.div`
    margin: auto;
    width: 75%;
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const Label = styled.label`
    font-weight: 700;
    font-style: italic;
    color: rgb(255, 255, 255);
    text-decoration: none;
    line-height: 1.4;
    font-size: 18.6667px;
    text-transform: none;
    color: rgb(255, 255, 255);
`;

export const ActionLink = styled(Link)`
    font-weight: 700;
    font-style: italic;
    color: rgb(255, 255, 255);
    text-decoration: none;
    line-height: 1.4;
    font-size: 18.6667px;
    text-transform: none;
    color: rgb(255, 255, 255);
    justify-content: flex-end;
    display: flex;
    cursor: pointer;
`;

export const ActionButton = styled.button`
    background-color: rgb(0, 215, 255);
    width: 100%;
    padding: 15px;
    font-weight: 700;
    font-style: italic;
    text-decoration: none;
    line-height: 1.4;
    font-size: 21.3333px;
    text-transform: uppercase;
    color: rgb(29, 29, 29);
    border-radius: 0.7rem;
    margin-top: 8%;
    margin-bottom: 8%;
`;

export const O = styled.span`
    font-weight: 700;
    font-style: italic;
    color: rgb(117, 199, 251);
    text-decoration: none;
    line-height: 0.8;
    font-size: 40.4301px;
    text-transform: uppercase;
    line-height: 0.8;
`;

export const R = styled(O)`
    color: rgb(255, 56, 71);
`;

export const ORWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        margin-bottom: 40px;
    }
`;

export const GoogleIcon = styled(Google)`
    cursor: pointer;
    @media (min-width: 768px) {
        width: 155%;
        height: 155%;
    }
`;

export const FbIcon = styled(Fb)`
    cursor: pointer;
    @media (min-width: 768px) {
        width: 155%;
        height: 155%;
    }
`;

export const SlashWrapper = styled.div`
    width: 156.558px;
    height: 7.90068px;
    transform: translate(-1.42109e-14px, 0px) rotate(-65deg);
`;

export const IconTray = styled.div`
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
        width: 100%;
    }
`;
