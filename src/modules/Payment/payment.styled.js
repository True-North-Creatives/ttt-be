import styled, { createGlobalStyle } from 'styled-components';

export const Layout = createGlobalStyle`
body {
    height: 100%;
    background-color: rgb(24 26 61);
    color: white;
}
`;

export const Disclaimer = styled.div`
    text-align: center;
    margin-top: 15px;
    font-size: 21px;
`;

export const PaymentBtn = styled.div`
    font-weight: 700;
    font-style: italic;
    font-size: 20px;
    position: relative;
    width: 250px;
    height: 60px;
    background: rgb(0, 174, 239);
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    transition: color 0.3s;
    line-height: 60px;
    text-align: center;
    color: #fff;

    &:after {
        position: absolute;
        top: 90%;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0 148 204);
        content: '';
        z-index: -2;
        transition: transform 0.3s;
    }
`;

export const PayLogos = styled.img`
    height: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ImgTray = styled.div`
    display: flex;
    width: 250px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
`;

export const Logo = styled.img`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    height: 40px;
    margin-top: 10px;
`;
