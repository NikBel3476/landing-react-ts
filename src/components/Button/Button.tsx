import React from 'react';
import cn from 'clsx';

import styles from './Button.module.css';

const MAPPED_BUTTON_STYLE = {
    white: styles.white,
    green: styles.green
}

const MAPPED_BUTTON_SIZE = {
    big: styles.big,
    small: styles.small
}

type ButtonProps = {
    text: string,
    style: keyof typeof MAPPED_BUTTON_STYLE,
    size: keyof typeof MAPPED_BUTTON_SIZE,
    className?: string
}

const Button = (props: ButtonProps): React.ReactElement => {
    const { text, style, size, className } = props;

    return <button className={cn(styles.button, className, MAPPED_BUTTON_STYLE[style], MAPPED_BUTTON_SIZE[size])}>{text}</button>;
}

export default Button;
