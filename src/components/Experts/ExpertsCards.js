import React, { useState } from 'react';

import Classes from './expertsCards.module.css';

export default function ExpertCard({ expert }) {
    return (
        <div className={Classes.container}>
            <img className={Classes.image} src={expert.src} alt="First Card" />
            <div className={Classes.expert_info}>
                <div className={Classes.expert_card_info}>
                    <p className={Classes.expert_name}>{expert.title}</p>
                    <p className={Classes.expert_description}>
                        {expert.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
