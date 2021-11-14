import React from 'react';
import cn from "clsx";

import Button from "../../Button";
import Link from "../../Link";

import styles from './IntroContent.module.css';
import { textColors } from "../../../colors/textColors";
import VideoArrowSVG from "../../../assets/Intro/VideoArrow.svg";

const IntroContent = (): React.ReactElement => {
    return (
        <div className={cn(styles.intro__content__wrapper)}>
            <div className={cn(styles.intro__text__wrapper)}>
                <h1 className={cn(styles.intro__title__text)}>
                        We Develop <span className={cn(textColors.green)}>Shopify</span> sites
                </h1>
                <p className={cn(styles.intro__main__text)}>
                    Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded insole with geometrical design.
                </p>
            </div>
            <div className={cn(styles.intro__links__wrapper)}>
                <Button text={"Contact us"} textColor={"white"} bgColor={"green"}/>
                <Link className={cn(styles.intro__link__text)} text={"Watch video"} color={"brown"} underlined={true}>
                    <img className={cn(styles.video_arrow_image)} src={VideoArrowSVG} alt={"video arrow"}/>
                </Link>
            </div>
        </div>
    );
}

export default IntroContent;
