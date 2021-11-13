import React from 'react';
import cn from "clsx";

import Button from "../../Button";

import styles from './Header.module.css';

const Header = (): React.ReactElement => {
    return (
        <header>
            <ul className={cn(styles.links__list)}>
                <li className={cn(styles.company__name)}>Web.Dev</li>
                <li className={cn(styles.links__list__link)}>Home</li>
                <li className={cn(styles.links__list__link)}>About</li>
                <li className={cn(styles.links__list__link)}>Testimonials</li>
                <li className={cn(styles.links__list__link)}>Contact</li>
                <li className={cn(styles.links__list__link)}>Sign in</li>
                <li className={cn(styles.links__list__link)}><Button className={cn(styles.button)} text={"Sign up"} textColor={"white"} bgColor={"green"}/></li>
            </ul>
        </header>
    );
}

export default Header;
