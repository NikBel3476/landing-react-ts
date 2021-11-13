import React from 'react';
import cn from 'clsx';

import Card from "./Card/Card";
import Button from "../../Button";

import styles from './SpecializationContent.module.css';

import WebflowLogo from '../../../assets/Specialization/webflow_logo.svg';
import ShopifyLogo from '../../../assets/Specialization/shopify_logo.svg';
import FigmaLogo from '../../../assets/Specialization/figama_logo.svg';
import PhpLogo from '../../../assets/Specialization/php_logo.svg';

import texts from './texts';

const SpecializationContent = (): React.ReactElement => {
    return (
        <div>
            <div className={cn(styles.content__wrapper)}>
                <p className={cn(styles.title)}>What we Do?</p>
                <p className={cn(styles.subtitle)}>Our Specialization</p>
            </div>
            <div className={cn(styles.cards__wrapper)}>
                <Card logo={WebflowLogo} titleText={"Webflow Development"} mainText={texts.mainText}/>
                <Card logo={ShopifyLogo} titleText={"Shopify Development"} mainText={texts.mainText}/>
                <Card logo={FigmaLogo} titleText={"Figma Web Designing"} mainText={texts.mainText}/>
                <Card logo={PhpLogo} titleText={"Php Development"} mainText={texts.mainText}/>
            </div>
            <div className={cn(styles.button__wrapper)}>
                <Button text={"Learn More"} width={225} textColor={"white"} bgColor={"green"}/>
            </div>
        </div>
    );
}

export default SpecializationContent;
