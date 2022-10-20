import React from 'react';

import PageLayout from '../PageLayout';
import Header from "./Header";
import IntroContent from "./IntroContent";

import styles from './Intro.module.css';

const Intro = (): React.ReactElement =>
    <section className={styles.container}>
        <PageLayout>
            <Header />
            <IntroContent />
        </PageLayout>
    </section>

export default Intro;
