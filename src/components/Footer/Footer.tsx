import React from "react";
import cn from 'clsx';

import PageLayout from "../PageLayout";
import FooterColumn from "./FooterColumn";
import Link from "../Link";
import Logo from "../Logo";
import Input from "./Input";

import styles from './Footer.module.css';
import webDevLogo from '../../assets/Footer/webdev_logo.svg';
import facebookLogo from '../../assets/Footer/facebook_logo.svg';
import twitterLogo from '../../assets/Footer/twitter_logo.svg';
import linkedinLogo from '../../assets/Footer/linkedin_logo.svg';

import { textColors } from "../../colors/textColors";
import { link, links } from "./Links";

const Footer = (): React.ReactElement => {
    return (
        <PageLayout className={cn(styles.container)}>
                <FooterColumn>
                    <Link url={"#top"}>
                        <Logo image={webDevLogo} />
                    </Link>
                    <p className={cn(styles.social_media__column__text, textColors.dark)}>You’ll find your next home loan valu you prefer.</p>
                    <div className={cn(styles.logo_links__wrapper)}>
                        <Link className={cn(styles.logo_link)} url={"#top"}><Logo image={facebookLogo} /></Link>
                        <Link className={cn(styles.logo_link)} url={"#top"}><Logo image={twitterLogo} /></Link>
                        <Link className={cn(styles.logo_link)} url={"#top"}><Logo image={linkedinLogo} /></Link>
                    </div>
                </FooterColumn>
                <FooterColumn title={"Resources"}>
                    <ul className={cn(styles.links_list)}>
                        {links.resources.map((link: link, index: number) =>
                            <li className={cn(styles.link)} key={index}><Link text={link.text} color={"dark"} url={link.url} underlined={false}/></li>
                        )}
                    </ul>
                </FooterColumn>
                <FooterColumn title={"Company"}>
                    <ul className={cn(styles.links_list)}>
                        {links.company.map((link: link, index: number) =>
                            <li className={cn(styles.link)} key={index}><Link text={link.text} color={"dark"} url={link.url} underlined={false}/></li>
                        )}
                    </ul>
                </FooterColumn>
                <FooterColumn title={"Get in touch"}>
                    <Input placeholder={"Enter your mail"}/>
                </FooterColumn>
        </PageLayout>
    );
}

export default Footer;
