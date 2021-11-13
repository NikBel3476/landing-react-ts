import React from 'react';

import PageLayout from "../PageLayout";
import SpecializationLogos from "./SpecializationLogos";

import styles from './Specialization.module.css';

const Specialization = (): React.ReactElement => {
    return (
        <div>
            <PageLayout>
                <SpecializationLogos></SpecializationLogos>
            </PageLayout>
        </div>
    );
}

export default Specialization;
