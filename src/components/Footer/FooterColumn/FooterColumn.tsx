import React from 'react';
import cn from 'clsx';

import styles from './FooterColumn.module.css';

import { links } from "../Links";

type FooterColumntProps = {
    linksList?: keyof typeof links;
    title?: string,
    className?: string,
    children?: React.ReactNode | React.ReactNode[]
}

const FooterColumn = (props: FooterColumntProps): React.ReactElement => {
    const { title, className, children } = props;

    return (
        <div className={cn(className)}>
            <p className={cn(styles.title)}>{title}</p>
            {children}
        </div>
    );
}

export default FooterColumn;
