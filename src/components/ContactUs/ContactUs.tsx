import React from 'react';
import cn from 'clsx';

import PageLayout from "../PageLayout";
import Button from "../Button";

import styles from './ContactUs.module.css';

const ContactUs = (): React.ReactElement => {
    return (
        <PageLayout>
            <div className={cn(styles.container)}>
                <p className={cn(styles.title)}>Need a little more home to grow?</p>
                <Button className={cn(styles.button)} text={"Contact Us"} style={"green"} size={"big"}/>
            </div>
        </PageLayout>
    );
}

export default ContactUs;
