import React from 'react';
import cn from 'clsx';

import PageLayout from "../PageLayout";
import SpecializationLogos from "./SpecializationLogos";
import SpecializationContent from "./SpecializationContent";

import styles from './Specialization.module.css';

const Specialization = (): React.ReactElement => {
    return (
        <div className={cn(styles.container)}>
            <PageLayout>
                <SpecializationLogos></SpecializationLogos>
                <SpecializationContent />
            </PageLayout>
        </div>
    );
}

export default Specialization;
