import React from 'react';
import cn from 'clsx';

import Logo from "../../Logo";

import styles from './Input.module.css';
import enterArrow from '../../../assets/Footer/enter_arrow.svg';

type InputProps = {
    placeholder?: string
}

const Input = (props: InputProps): React.ReactElement => {
    const { placeholder } = props;

    return (
        <div className={cn(styles.container)}>
            <input className={cn(styles.input)} placeholder={placeholder}/>
            <Logo image={enterArrow} />
        </div>
    );
}

export default Input;
