import React from 'react';
import cn from 'clsx';

import PageLayout from "../PageLayout";
import PageTitle from "../PageTitle";
import PriceCard from "./PriceCard";

import styles from './PricingPolicy.module.css';


const PricingPolicy = (): React.ReactElement => {
    return (
        <PageLayout>
            <PageTitle className={cn(styles.title)} title={"Pricing"} subtitle={"Pricing Policy"} />
            <div className={cn(styles.cards__wrapper)}>
                <PriceCard className={cn(styles.card)} title={"For Starter"} price={"$1499"} featuresKit={"full"} />
                <PriceCard className={cn(styles.card)} title={"For Teams"} price={"$2999"} featuresKit={"full"} />
                <PriceCard className={cn(styles.card)} title={"For Company"} price={"Custom"} featuresKit={"default"} />
            </div>
        </PageLayout>
    );
}

export default PricingPolicy;
