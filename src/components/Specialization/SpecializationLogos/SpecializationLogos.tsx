import React from 'react';
import cn from 'clsx';

import styles from './SpecializationLogos.module.css';
import ChaseLogo from '../../../assets/Specialization/chase_logo.svg';
import AsanaLogo from '../../../assets/Specialization/asana_logo.svg';
import GoogleLogo from '../../../assets/Specialization/google_logo.svg';
import BuzzfeedLogo from '../../../assets/Specialization/buzzfeed_logo.svg';
import WalmartLogo from '../../../assets/Specialization/walmart_logo.svg';

const SpecializationLogos = (): React.ReactElement => {
    return (
        <div className={cn(styles.logos__wrapper)}>
            <img src={ChaseLogo} alt={"Chase logo"}/>
            <img src={AsanaLogo} alt={"Asana logo"}/>
            <img src={GoogleLogo} alt={"Google logo"}/>
            <img src={BuzzfeedLogo} alt={"BuzzFeed logo"}/>
            <img src={WalmartLogo} alt={"Walmart logo"}/>
        </div>
    );
}

export default SpecializationLogos;
