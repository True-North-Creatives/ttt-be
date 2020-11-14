import React from 'react';
import Classes from './privacy.module.css';

const terms = () => (
    <div className={Classes.copyright}>
        <div>
            <a href="/privacy.html">Privacy Policy</a> |{' '}
            <a href="/terms.html">Terms & Conditions</a>
        </div>
        <p>Copyright @ 2020 TimeToTrain.Fit. All rights reserved.</p>
    </div>
);
export default terms;
