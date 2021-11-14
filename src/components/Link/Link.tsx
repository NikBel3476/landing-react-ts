import React from 'react';
import cn from 'clsx';

import styles from './Link.module.css';

import { textColors } from "../../colors/textColors";

type LinkProps = {
    text?: string,
    color?: keyof typeof textColors,
    underlined?: boolean,
    url?: string,
    className?: string,
    children?: React.ReactNode | React.ReactElement[];
}

const getColorStyle = (color?: keyof typeof textColors): string =>
    color ? textColors[color] : textColors.dark

const getUnderlineStyle = (underlined?: boolean): string =>
    underlined ? styles.underlined : styles.not_underlined

const Link = (props: LinkProps): React.ReactElement => {
    const { text, color, underlined, url, className, children } = props;

    return (
        <a className={cn(styles.link, getColorStyle(color), getUnderlineStyle(underlined), className)} href={url}>
            {text}
            {children}
        </a>
    );
}

export default Link;
