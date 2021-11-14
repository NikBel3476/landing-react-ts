import React from 'react';
import cn from 'clsx';

import styles from './Button.module.css';
import { textColors } from "../../colors/textColors";
import { bgColors } from "../../colors/bgColors";

type ButtonProps = {
    text: string,
    textColor: keyof typeof textColors,
    bgColor: keyof typeof bgColors,
    withBorder?: boolean,
    className?: string
}

const setBorder = (withBorder?: boolean): string | null =>
    withBorder ? styles.bordered : null;

const Button = (props: ButtonProps): React.ReactElement => {
    const { text, textColor, bgColor, withBorder, className } = props;

    return <button className={cn(styles.button, className, textColors[textColor], bgColors[bgColor], setBorder(withBorder))}>{text}</button>;
}

export default Button;
