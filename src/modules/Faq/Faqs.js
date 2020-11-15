import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SocialButtons from '../../components/socialButtons/SocialButtons';
import CustomAccordion from '../../components/CustomAccordion/CustomAccordion';

import Classes from './faqs.module.css';
import PrivacyTerms from './../../components/PrivacyTerms';

export default function Faqs() {
    return (
        <div className={Classes.container}>
            <Header />
            <div className={Classes.faqs}>
                <h1>FAQs</h1>
                <div className={Classes.Questions}>
                    <CustomAccordion />
                </div>
                <div className={Classes.footer}>
                    <div>
                        <Link
                            className={Classes.button}
                            to='/register'
                        >
                            Join Now
                        </Link>
                        <h4 className={Classes.price}>INR 99/ MONTH</h4>
                    </div>
                </div>
            </div>
            <SocialButtons />

            <PrivacyTerms />
        </div>
    );
}
