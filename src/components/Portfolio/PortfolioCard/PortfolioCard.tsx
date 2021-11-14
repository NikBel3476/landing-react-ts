import React from 'react';
import cn from "clsx";

import Link from "../../Link";

import styles from './PortfolioCard.module.css';

type PortfolioCardProps = {
    img: string,
    text: string,
    imgAlt?: string,
    className?: string
}

const PortfolioCard = (props: PortfolioCardProps): React.ReactElement => {
    const { img, text, imgAlt, className } = props;

    return (
        <div className={cn(styles.container, className)}>
            <img src={img} className={cn(styles.image)} alt={imgAlt}></img>
            <div className={cn(styles.text__wrapper)}>
                <p className={cn(styles.text)}>{text}</p>
                <Link className={cn(styles.link)} text={"View Details"} color={"green"} />
            </div>
        </div>
    );
}

export default PortfolioCard;
