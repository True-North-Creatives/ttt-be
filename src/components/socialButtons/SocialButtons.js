import React from 'react';

import Classes from './socialButtons.module.css';

export default function SocialButtons() {
    return (
        <div className={Classes.container}>
            <div className={Classes.icons}>
                <img
                    onClick={() =>
                        window.open(
                            'https://www.instagram.com/timetotrain.fit/'
                        )
                    }
                    className={Classes.icons_images}
                    src={'insta.svg'}
                    alt="Insta Icon"
                />
                <img
                    onClick={() =>
                        window.open('https://www.facebook.com/timetotrain.fit')
                    }
                    className={Classes.icons_images}
                    src={'fb.png'}
                    alt="FaceBook Icon"
                />
                <img
                    onClick={() =>
                        window.open('https://twitter.com/timetotrain_fit')
                    }
                    className={Classes.icons_images}
                    src={'twitter png.png'}
                    alt="FaceBook Icon"
                />
            </div>
        </div>
    );
}
