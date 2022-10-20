import React from 'react';

import PageLayout from "../PageLayout";
import SpecializationLogos from "./SpecializationLogos";
import SpecializationContent from "./SpecializationContent";

const Specialization = (): React.ReactElement => {
    return (
        <PageLayout>
            <SpecializationLogos></SpecializationLogos>
            <SpecializationContent />
        </PageLayout>
    );
}

export default Specialization;
