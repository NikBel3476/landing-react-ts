import React from 'react';
import cn from 'clsx';

// import styles from './Logo.module.css';

type LogoProps = {
    className?: string,
    image: string,
    alt?: string
}

const Logo = (props: LogoProps): React.ReactElement => {
    const { className, image, alt } = props;

    return (
        <img className={cn(className)} src={image} alt={alt}></img>
    );
}

export default Logo;
