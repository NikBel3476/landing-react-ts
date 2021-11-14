import React from 'react';
import cn from 'clsx';

import Button from '../../Button';
import Link from '../../Link';

import styles from './Header.module.css';
import { textColors } from "../../../colors/textColors";

const Header = (): React.ReactElement => {
    return (
        <header>
            <nav className={cn(styles.links__list)}>
                    <Link className={cn(styles.company__name)} text={"Web"}>.Dev</Link>
                    <Link className={cn(styles.links__list__link, textColors.dark)} text={"Home"} url={"#top"} />
                    <Link className={cn(styles.links__list__link, textColors.dark)} text={"About"} url={"#top"} />
                    <Link className={cn(styles.links__list__link, textColors.dark)} text={"Testimonials"} url={"#top"} />
                    <Link className={cn(styles.links__list__link, textColors.dark)} text={"Contact"} url={"#top"} />
                    <Link className={cn(styles.links__list__link, textColors.dark)} text={"Sign in"} url={"#top"} />
                    <Link className={cn(styles.links__list__link, textColors.dark)} url={"#top"}>
                        <Button className={cn(styles.button)} text={"Sign up"} color={"green"} size={"small"}/>
                    </Link>
            </nav>
        </header>
    );
}

export default Header;
