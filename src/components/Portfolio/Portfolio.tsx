import React from 'react';
import cn from 'clsx';

import PageLayout from "../PageLayout";
import PageTitle from "../PageTitle";
import PortfolioCard from "./PortfolioCard";

import styles from './Portfolio.module.css';
import fashionImg from '../../assets/Portfolio/fashion.png';
import fitnessImg from '../../assets/Portfolio/fitness.png';
import furnitureImg from '../../assets/Portfolio/furniture.png';
import itImg from '../../assets/Portfolio/it.png';
import Button from "../Button";

const Portfolio = (): React.ReactElement => {
    return (
        <PageLayout>
            <PageTitle className={cn(styles.title)} title={"Our Work"} subtitle={"Our Portfolio"} />
            <div className={cn(styles.cards__wrapper)}>
                <PortfolioCard img={fashionImg} text={"Fashion Landing page"}/>
                <PortfolioCard className={cn(styles.with_margin_top)}img={fitnessImg} text={"Health & Fitness"}/>
                <PortfolioCard img={furnitureImg} text={"Furniture Shop"}/>
                <PortfolioCard className={cn(styles.with_margin_top)} img={itImg} text={"IT Solution Provider"}/>
            </div>
            <div className={cn(styles.button__wrapper)}>
                <Button text={"All Projects"} color={"green"} size={"big"} />
            </div>
        </PageLayout>
    );
}

export default Portfolio;
