import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Header from '../../components/Header/Header';
import Classes from './home.module.css';
import Footer from '../../components/Footer/Footer';
import SocialButtons from '../../components/socialButtons/SocialButtons';
import classes from './home.module.css';

export default function Home() {
    const footer1 = {
        para1: "It's all about",
        strong: 'Dedication',
    };

    const footer2 = {
        para1: ' We guide you to train by yourself on how to keep your',
        strong: 'muscles in condition.',
        para2:
            'increase muscle performance, avoid injury, and how to overcome injury.',
    };
    const footer3 = {
        para1:
            'Don’t worry, We started this journey to guide you on how to start your',
        strong: 'fitness journey.',
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slider, setSlider] = useState(0);
    const indicatorStyles = {
        transition: 'opacity .25s ease-in',
        opacity: 0.3,
        filter: 'alpha(opacity=30)',
        boxShadow: '1px 1px 2px rgba(0,0,0,0.9)',
        background: '#fff',
        borderRadius: '50%',
        width: 6,
        height: 7,
        cursor: 'pointer',
        display: 'inline-block',
        margin: 2,
    };

    const next = () => {
        if (currentSlide === 2) {
            setCurrentSlide(0);
        }
        let slide = currentSlide + 1;
        setCurrentSlide(slide);
    };

    const prev = () => {
        let slide = currentSlide - 2;
        setCurrentSlide(slide);
    };
    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    };
    return (
        <div>
            <Header />
            <Carousel
                axis="vertical"
                // interval={4000}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                // autoPlay={true}
                swipeable={true}
                onChange={updateCurrentSlide}
                infiniteLoop={true}
                selectedItem={currentSlide}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    setSlider(index);
                    if (isSelected) {
                        return (
                            <li
                                style={{
                                    ...indicatorStyles,
                                    opacity: 0.8,
                                    boxShadow:
                                        '1px 1px 2px rgba(255,255,255,0.9)',
                                    width: 10,
                                    height: 10,
                                }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                <div className={Classes.container}>
                    <img src={'mainslider.png'} alt="First slider" />
                    <SocialButtons />
                    <Footer para1={footer1.para1} strong={footer1.strong} />
                </div>
                <div className={Classes.container}>
                    <img src={'s2.webp'} alt="Second Slider" />
                    <SocialButtons />
                    <Footer
                        para1={footer2.para1}
                        strong={footer2.strong}
                        para2={footer2.para2}
                    />
                </div>
                <div className={Classes.container}>
                    <img src={'s4.png'} alt="Third Slider" />
                    <SocialButtons />
                    <Footer para1={footer3.para1} strong={footer3.strong} />
                </div>
            </Carousel>
            {slider === 2 ? (
                <div className={classes.container2} onClick={next}>
                    <div className={classes.chevron}></div>
                    <div className={classes.chevron}></div>
                    <div className={classes.chevron}></div>
                </div>
            ) : (
                <div className={classes.container2} onClick={prev}>
                    <div className={classes.chevron}></div>
                    <div className={classes.chevron}></div>
                    <div className={classes.chevron}></div>
                </div>
            )}
        </div>
    );
}
