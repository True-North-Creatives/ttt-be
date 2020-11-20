import React, { useState } from 'react';

import Classes from './cards.module.css';

export default function ImageCard({ service }) {
    const [displayDetail, setDisplayDetail] = useState(false);
    return (
        <div className={Classes.container}>
            <img className={Classes.image} src={service.src} alt="First Card" />
            {displayDetail && (
                <div
                    className={Classes.imageDetail}
                    onClick={() => setDisplayDetail(false)}
                >
                    <div className={Classes.card_info}>
                        <h1>{service.title}</h1>
                        {service.steps ? (
                            <>
                                <p>{service.description}</p>
                                <div className={Classes.steps}>
                                    {service &&
                                        service.steps.map((step) => (
                                            <li>{step}</li>
                                        ))}
                                </div>
                            </>
                        ) : (
                            <p>{service.description}</p>
                        )}
                    </div>
                </div>
            )}
            <div
                className={Classes.imageOverlay}
                onClick={() => setDisplayDetail(true)}
            >
                <p className={Classes.heading}>{service.title}</p>
                <p className={Classes.preview}>Click to preview</p>
            </div>
        </div>
    );
}
