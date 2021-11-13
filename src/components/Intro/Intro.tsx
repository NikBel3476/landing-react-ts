import React from 'react';

import PageLayout from '../PageLayout';
import Header from "./Header";
import IntroContent from "./IntroContent";

import styles from './Intro.module.css';

const Intro = (): React.ReactElement =>
    <div className={styles.container}>
        <PageLayout>
            <Header></Header>
            <IntroContent></IntroContent>
        </PageLayout>
    </div>

export default Intro;
