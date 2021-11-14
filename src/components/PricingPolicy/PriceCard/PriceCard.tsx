import React from 'react';
import cn from "clsx";

import Button from "../../Button";
import Logo from "../../Logo";

import styles from './PriceCard.module.css';
import checkmark from '../../../assets/PricingPolicy/checkmark.svg';
import { textColors } from "../../../colors/textColors";
import { featuresList } from "../featuresList/featuresList";

type PriceCardProps = {
    title: string,
    price: string,
    featuresKit: keyof typeof featuresList,
    className?: string
}

const PriceCard = (props: PriceCardProps): React.ReactElement => {
    const { title, price, featuresKit, className } = props;

    return (
        <div className={cn(className, styles.container)}>
            <p className={cn(styles.title, textColors.dark)}>{title}</p>
            <p className={cn(styles.price, textColors.dark)}>{price}</p>
            <ul className={cn(styles.features_list)}>
                {featuresList[featuresKit].map((feature, index) =>
                    <li className={cn(styles.feature, textColors.brown)} key={index}>
                        <Logo className={cn(styles.feature_logo)} image={checkmark} />
                        {feature}
                    </li>
                )}
            </ul>
            <div className={cn(styles.button__wrapprer)}>
                <Button text={"Request Demo"} style={"white"} size={"big"}/>
            </div>
        </div>
    );
}

export default PriceCard;
