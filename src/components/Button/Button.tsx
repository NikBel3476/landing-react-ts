import React from 'react';
import cn from 'clsx';

import styles from './Button.module.css';
import { textColors } from "../../colors/textColors";
import { bgColors } from "../../colors/bgColors";

type ButtonProps = {
    text: string,
    width: number, // pixels
    textColor: keyof typeof textColors,
    bgColor: keyof typeof bgColors,
    className?: string
}

const Button = (props: ButtonProps): React.ReactElement => {
    const { text, width, textColor, bgColor, className } = props;

    return <button className={cn(styles.button, className, textColors[textColor], bgColors[bgColor])} style={{width: width}}>{text}</button>;
}

export default Button;
