import React from 'react';

import Header from '../../components/Header/Header';
import ImageCard from '../../components/Cards/ImageCard';
import SocialButtons from '../../components/socialButtons/SocialButtons';

import Classes from './services.module.css';
import { redirectToRegister } from '../../utils/redirect';
import PrivacyTerms from './../../components/PrivacyTerms';
export default function Services() {
    let services = [
        {
            src: 'ser1.png',
            title: 'Functional Bodybuilding',
            description: 'Build muscles with our Functional Training',
            steps: [
                '1000+ Exercises',
                'You can swap exercise',
                'Choose exercises with or without equipments',
                'Upto 1.5 Hrs workout time ',
                'Track your progress on every workout',
                'Included Rest Time',
            ],
        },
        {
            src: 'ser2.png',
            title: 'POWERBUILDING',
            description: 'Build The Power you needed',
            steps: [
                'Less than 1 Hrs workout time',
                'Build the power',
                'Included Rest Time',
                'Step by  step Instructions',
                'Includes Video Demonstrations',
                'Get alternate exercise',
            ],
        },

        {
            src: 'ser3.png',
            title: 'CARDIO WORKOUTS',
            description: 'Make Cardio Fun',
            steps: [
                'Demonstration of each Movement',
                'Provided by Experts & Doctors',
                'Upper & Lower Body Included',
                'Exercise are just 10min or Less',
                'Bodyweight & Weighted Included',
            ],
        },
        {
            src: 'ser4.png',
            title: 'MUSCLE CONDITIONING',
            description: 'Keep you Body in right condition',
            steps: [
                'DWarm-up instructions',
                'PREHAB - Prevent Injuries',
                'REHAB - Recovery phase',
                'Tested methods by registered doctors',
            ],
        },
        {
            src: 'ser5.png',
            title: 'YOGA',
            description: "It's YOGA",
            steps: [
                '0 Min workout sessions',
                'Greater flexibility ',
                'No equipment required',
                'Learn to control your body',
            ],
        },
        {
            src: 'ser6.png',
            title: 'DAILY MEAL PLANS',
            description: 'Daily Meal Plans',
            steps: [
                'Weekly written meal plans',
                'Swap/substitute any items',
                'Easy to cook',
                'Developed by Dietician',
                'Substitute list for Indians, Middle East region, Western Countries',
            ],
        },
        {
            src: 'ser7.png',
            title: 'MULTIPLE MEAL PLANS',
            description: 'Multiple Meal plans',
            steps: [
                'Choose the best plan according to your goals',
                'Easy to understand ',
                'Muscle Building meal plan',
                'Mass Gainer',
                'General health Maintenance',
                'Keto Diet',
                'Weigh loss Diet plan',
            ],
        },

        {
            src: 'ser8.png',
            title: 'PERFECT MEAL PLANS',
            description: 'Perfect Meal Plans',
            steps: [
                'Choose your plan according to your goal',
                'Give your heigh and weight details',
                'Get perfectly portioned meals',
                'Calculated Macros',
            ],
        },
        {
            src: 'ser9.png',
            title: 'GROCERY LIST',
            description: 'Grocery list',
            steps: [
                'Select your meal',
                'Get Macros Breakdown',
                'Use swap button to change any items in you meal',
                'Use Auto Grocery list  for your convenience ',
            ],
        },
    ];
    return (
        <div className={Classes.container}>
            <Header />
            <div className={Classes.serviceSliders}>
                <h1>What You Get!</h1>
                <div className={Classes.images}>
                    {services &&
                        services.map((service) => (
                            <ImageCard service={service} />
                        ))}
                </div>
                <div className={Classes.footer}>
                    <div>
                        <button
                            className={Classes.button}
                            onClick={redirectToRegister}
                        >
                            Join Now
                        </button>
                        <h4 className={Classes.price}>INR 99/ MONTH</h4>
                    </div>
                </div>
            </div>
            <SocialButtons />
            <PrivacyTerms />
        </div>
    );
}
