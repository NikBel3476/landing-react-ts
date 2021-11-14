import React from 'react';
import cn from 'clsx';

import PageLayout from "../PageLayout";

import styles from './Copyright.module.css';

const Copyright = (): React.ReactElement => {
    return (
        <PageLayout className={cn(styles.container)}>
            <p className={cn(styles.text)}>Copyright {new Date().getFullYear()} ©Web.Dev All rights reserved.</p>
        </PageLayout>
    );
}

export default Copyright;
