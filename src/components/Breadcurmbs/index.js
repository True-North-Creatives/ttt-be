import React from 'react';
import './breadcrumbs.css';

export default () => {
    return (
        <div style={{textAlign:'center'}}>
            <ul id="breadcrumb">
                <li className='mobile-hide'>
                    <div>
                        <span className="icon icon-home"> </span> <span className='done'>Home</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span className="icon-user"> </span> <span className='done'>
                            Account
                            </span>
                    </div>
                </li>
                <li>
                    <div>
                        <span className="icon icon-double-angle-right highlight"></span>{' '}
                        <span className='highlight'>
                            Subcription
                            </span>
                    </div>
                </li>
                <li>
                    <div>
                        <span className="icon-money"> </span> Payment
                    </div>
                </li>
                <li className='mobile-hide'>
                    <div>
                        <span className="icon icon-rocket"> </span> Getting started
                    </div>
                </li>
            </ul>
        </div>
    );
};
