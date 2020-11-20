import React, { useState } from 'react';
import {
    SubcriptionCards,
    SubcriptionAmount,
    SubcriptionPlan,
    Heading,
    Symbol,
    SymbolPrice,
    Desc,
    PromotiomBadge,
    Summary,
    StrikeThrough,
    Aligner,
} from './Subscription.styled';
import './RadioBtn.css';

const MONTH = 1;
const YEARLY = 2;

const Subscription = ({ setChoice }) => {
    const [month, setMonthly] = useState(false);
    const [year, setYearly] = useState(false);
    const selectSubscription = (opt) => {
        if (opt === MONTH) {
            setMonthly(true);
            setYearly(false);
            setChoice(MONTH);
        }
        if (opt === YEARLY) {
            setMonthly(false);
            setYearly(true);
            setChoice(YEARLY);
        }
    };

    return (
        <>
            <Heading>Choose a plan</Heading>
            <Aligner>
                <SubcriptionCards onClick={() => selectSubscription(MONTH)}>
                    <SubcriptionPlan>
                        <input
                            className="inp-cbx"
                            id="month"
                            type="radio"
                            name="subscription"
                            style={{ display: 'none' }}
                            onChange={(e) => setMonthly(e.target.checked)}
                            checked={month}
                        />
                        <label className="cbx" for="month">
                            <span>
                                <svg
                                    width="12px"
                                    height="9px"
                                    viewbox="0 0 12 9"
                                >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg>
                            </span>
                            <span>1-month plan</span>
                        </label>
                    </SubcriptionPlan>
                    <SymbolPrice>
                        <SubcriptionAmount>
                            <Symbol>₹</Symbol>
                            99
                        </SubcriptionAmount>
                    </SymbolPrice>
                    <Desc>per month</Desc>
                    <PromotiomBadge>Save 0%</PromotiomBadge>
                    <Summary>₹99 billed every month</Summary>
                </SubcriptionCards>
                <SubcriptionCards onClick={() => selectSubscription(YEARLY)}>
                    <SubcriptionPlan>
                        <input
                            className="inp-cbx"
                            id="year"
                            type="radio"
                            name="subscription"
                            style={{ display: 'none' }}
                            checked={year}
                            onChange={(e) => setYearly(e.target.checked)}
                        />
                        <label className="cbx" for="year">
                            <span>
                                <svg
                                    width="12px"
                                    height="9px"
                                    viewbox="0 0 12 9"
                                >
                                    <polyline points="1 5 4 8 11 1"></polyline>
                                </svg>
                            </span>
                            <span>1-year plan</span>
                        </label>
                    </SubcriptionPlan>
                    <SymbolPrice>
                        <SubcriptionAmount>
                            <Symbol>₹</Symbol>
                            83.25
                        </SubcriptionAmount>
                    </SymbolPrice>
                    <Desc>per month</Desc>
                    <PromotiomBadge>Save 15%</PromotiomBadge>
                    <Summary>
                        <StrikeThrough>₹1188</StrikeThrough> ₹999 billed every
                        year
                    </Summary>
                </SubcriptionCards>
            </Aligner>
        </>
    );
};

export default Subscription;
