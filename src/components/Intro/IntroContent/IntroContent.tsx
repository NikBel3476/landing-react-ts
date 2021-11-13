import React from 'react';
import cn from "clsx";

import Button from "../../Button";

import VideoArrowSVG from "../../../assets/Intro/VideoArrow.svg";
import styles from './IntroContent.module.css';

const IntroContent = (): React.ReactElement => {
    return (
        <div className={cn(styles.intro__content__wrapper)}>
            <div className={cn(styles.intro__text__wrapper)}>
                <h1 className={cn(styles.intro__title__text)}>
                        We Develop <span className={cn(styles.green_text)}>Shopify</span> sites
                </h1>
                <p className={cn(styles.intro__main__text)}>
                    Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded insole with geometrical design.
                </p>
            </div>
            <div className={cn(styles.intro__links__wrapper)}>
                <Button text={"Contact us"} width={225} textColor={"white"} bgColor={"green"}/>
                <p className={cn(styles.intro__links__text)}>
                    Watch video
                    <img className={cn(styles.video_arrow_image)} src={VideoArrowSVG} alt={"video arrow"}/>
                </p>
            </div>
        </div>
    );
}

export default IntroContent;
