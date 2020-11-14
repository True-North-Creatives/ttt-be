import styled from 'styled-components';

export const SubcriptionCards = styled.div`
    background-color: rgb(15, 53, 114);
    width: 220px;
    min-width: 220px;
    border-radius: 20px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    cursor: pointer;
    @media (min-width: 768px) {
        margin-left: 10px;
        margin-right: 0;
        width: 250px;
        height: 220px;
        margin-bottom: 40px;
    }
`;

export const SubcriptionPlan = styled.div`
    margin-left: 20px;
    padding-top: 20px;
`;

export const SubcriptionAmount = styled.span`
    font-size: 40px;
    font-weight: 700;
    font-style: italic;
`;

export const Heading = styled.div`
    color: rgb(0, 174, 239);
    font-size: 24px;
    margin-top: 25px;
    text-align: center;
    @media (min-width: 768px) {
        margin-top: 40px;
        margin-bottom: 20px;
    }
`;

export const Symbol = styled.sup`
    color: #2196f3;
    font-size: 20px;
`;

export const SymbolPrice = styled.div`
    text-align: center;
    margin-top: 10px;
`;

export const Desc = styled.div`
    margin-top: 10px;
    text-align: center;
`;

export const PromotiomBadge = styled.div`
    background-color: #00d7ff;
    color: black;
    font-size: 14px;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    text-align: center;
    border-radius: 5px;
`;

export const Summary = styled.div`
    font-size: 14px;
    font-style: italic;
    text-align: center;
    margin-top: 10px;
`;

export const StrikeThrough = styled.span`
    text-decoration: line-through;
    color: red;
`;

export const Aligner = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
    }
`;
