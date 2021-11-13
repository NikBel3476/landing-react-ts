import React from 'react';
import cn from "clsx";

import styles from './PageTitle.module.css';

type PageTitleProps = {
    title: string,
    subtitle: string,
    className?: string
}

const PageTitle = (props: PageTitleProps): React.ReactElement => {
    const { title, subtitle, className } = props;

    return (
        <div className={cn(className)}>
            <p className={cn(styles.title)}>{title}</p>
            <p className={cn(styles.subtitle)}>{subtitle}</p>
        </div>
    );
}

export default PageTitle;
