import React from 'react';
import cn from 'clsx';

import styles from './Button.module.css';

type ButtonProps = {
    text: string,
    width: number, // pixels
    className?: string
}

const Button = (props: ButtonProps): React.ReactElement => {
    const { text, width, className } = props;

    return <button className={cn(styles.button, className)} style={{width: width}}>{text}</button>;
}

export default Button;