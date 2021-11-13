import React from 'react';
import cn from 'clsx';

import styles from './Link.module.css';

import { textColors } from "../../colors/textColors";

type LinkProps = {
    text: string,
    color: keyof typeof textColors,
    url?: string,
    className?: string,
    children?: React.ReactNode | React.ReactElement[];
}

const Link = (props: LinkProps): React.ReactElement => {
    const { text, color, url, className, children } = props;

    return (
        <a className={cn(styles.link, textColors[color], className)} href={url}>{text}{children}</a>
    );
}

export default Link;
