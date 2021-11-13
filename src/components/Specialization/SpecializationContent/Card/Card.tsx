import React from 'react';
import cn from 'clsx';

import Logo from "../../../Logo";
import Link from "../../../Link";

import styles from './Card.module.css';
import colors from '../../../../styles/textColors.module.css';

type CardProps = {
    logo: string,
    titleText: string,
    mainText: string
}

const Card = (props: CardProps): React.ReactElement => {
    const { logo, titleText, mainText } = props;

    return (
        <div className={styles.container}>
            <div className={cn(styles.inner__container)}>
                <p className={cn(styles.title, colors.dark)}>
                    <Logo className={cn(styles.logo)} image={logo} alt={"Webflow logo"}/>
                    {titleText}
                </p>
                <p className={cn(styles.main_text, colors.brown)}>
                    {mainText}
                </p>
                <Link text={"Read more"} color={"dark"}/>
            </div>
        </div>
    );
}

export default Card;
