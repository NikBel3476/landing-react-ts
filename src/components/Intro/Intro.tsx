import React from 'react';
import cn from 'clsx';

import PageLayout from '../PageLayout';

import styles from './Intro.module.css';
import Button from '../Button';
import PlayVideoSVG from '../../assets/PlayVideo.svg';

const Intro = (): React.ReactElement =>
    <div className={styles.container}>
        <PageLayout>
            <ul className={cn(styles.link__list)}>
                <li className={cn(styles.company__name)}>Web.Dev</li>
                <li className={cn(styles.link__list__link)}>Home</li>
                <li className={cn(styles.link__list__link)}>About</li>
                <li className={cn(styles.link__list__link)}>Testimonials</li>
                <li className={cn(styles.link__list__link)}>Contact</li>
                <li className={cn(styles.link__list__link)}>Sign in</li>
                <li className={cn(styles.link__list__link)}><Button text={"Sign up"} width={152}></Button></li>
            </ul>
        </PageLayout>
        <div className={cn(styles.intro__content__wrapper)}>
            <div className={cn(styles.intro__text__wrapper)}>
                <h1 className={cn(styles.intro__title__text)}>
                    <p style={{margin: "0"}}>We Develop</p> <p style={{margin: "0"}}><span style={{color: "#49ad09"}}>Shopify</span> sites</p>
                </h1>
                <p className={cn(styles.intro__main__text)}>Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded insole with geometrical design.</p>
            </div>
            <div className={cn(styles.intro__links__wrapper)}>
                <Button text={"Contact us"} width={225}></Button>
                <p className={cn(styles.intro__links__text)}>Watch video <img src={PlayVideoSVG}></img></p>
            </div>
        </div>
    </div>

export default Intro;
