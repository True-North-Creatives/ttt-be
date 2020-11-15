import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import SocialButtons from '../../components/socialButtons/SocialButtons';
import Classes from './experts.module.css';
import ImageCard from '../../components/Cards/ImageCard';
import PrivacyTerms from './../../components/PrivacyTerms';
export default function Experts() {
    let experts = [
        {
            src: 'expert1.jpg',
            title: 'Dr.ABc',
            description:
                'Being a Doctor out of Palmer College of Chiropractic and earning his board certification for physiotherapy, Dr. Abc focuses on performance, rehabilitation, and more. Follow our Muscle Performance section for joint specific rehab, prehab, warm ups, and educational videos filmed by him.',
        },
        {
            src: 'expert2.jpg',
            title: 'Dr.DEF',
            description:
                'Being a Doctor out of Palmer College of Chiropractic and earning his board certification for physiotherapy, Dr. Abc focuses on performance, rehabilitation, and more.',
        },
        {
            src: 'expert3.jpg',
            title: 'Expert',
            description:
                'Being a Doctor out of Palmer College of Chiropractic and earning his board certification for physiotherapy.',
        },
        {
            src: 'expert4.jpg',
            title: 'Expert',
            description:
                'Being a Doctor out of Palmer College of Chiropractic and earning his board..',
        },
        {
            src: 'expert5.jpg',
            title: 'Expert teacher',
            description:
                'Being a Doctor out of Palmer College of Chiropractic and earning his board certification for physiotherapy, prehab, warm ups, and educational videos filmed by him.',
        },
    ];
    return (
        <div className={Classes.container}>
            <Header />
            <div className={Classes.expertSliders}>
                <h1>Who's our Experts!</h1>
                <div className={Classes.images}>
                    {experts &&
                        experts.map((expert) => <ImageCard service={expert} />)}
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
