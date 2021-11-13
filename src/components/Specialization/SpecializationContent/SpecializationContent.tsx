import React from 'react';
import cn from 'clsx';

import SpecializationCard from "./SpecializationCard";
import Button from "../../Button";

import styles from './SpecializationContent.module.css';

import WebflowLogo from '../../../assets/Specialization/webflow_logo.svg';
import ShopifyLogo from '../../../assets/Specialization/shopify_logo.svg';
import FigmaLogo from '../../../assets/Specialization/figama_logo.svg';
import PhpLogo from '../../../assets/Specialization/php_logo.svg';

import { texts } from './texts';
import PageTitle from "../../PageTitle";

const SpecializationContent = (): React.ReactElement => {
    return (
        <div>
            <PageTitle className={styles.title} title={"What we Do?"} subtitle={"Our Specialization"} />
            <div className={cn(styles.cards__wrapper)}>
                <SpecializationCard logo={WebflowLogo} titleText={"Webflow Development"} mainText={texts.mainText}/>
                <SpecializationCard logo={ShopifyLogo} titleText={"Shopify Development"} mainText={texts.mainText}/>
                <SpecializationCard logo={FigmaLogo} titleText={"Figma Web Designing"} mainText={texts.mainText}/>
                <SpecializationCard logo={PhpLogo} titleText={"Php Development"} mainText={texts.mainText}/>
            </div>
            <div className={cn(styles.button__wrapper)}>
                <Button text={"Learn More"} textColor={"white"} bgColor={"green"}/>
            </div>
        </div>
    );
}

export default SpecializationContent;
