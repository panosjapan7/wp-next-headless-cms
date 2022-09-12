import React from "react";
import styles from '../styles/about.module.css'
import Head from 'next/head'

function About() {
    return (
        <>
            <Head>
                <meta name="keywords" content="education, headless cms, wordpress, nextjs" />
                <meta name="Panos Tsapanidis" content="Webb21 CMS" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>About: Webb21 CMS Examinationsuppgift</title>
            </Head>
            <div className={styles.aboutWrapper}>
                <h1 className={styles.h1Title}>Webbutveckling med CMS Uppgift</h1>
        
                <div className={styles.teamStackContainer}>
                <div className={styles.teamContainer}>
                    <h2 className={styles.h2Title}>Headless CMS with WordPress.com & Next.js</h2>
                    <p className={styles.teamItems}>Made By: Panos Tsapanidis</p>
                    <a
                    href="https://github.com/panosjapan7/headless-cms-wordpress"
                    target={"_blank"}
                    className={styles.link}
                    rel="noreferrer"
                    >
                    GitHub Repository
                    </a>
                </div>
                <div className={styles.stackContainer}>
                    <h2 className={styles.h2Title}>Stack</h2>
                    <p className={styles.stackItems}>Wordpress</p>
                    <p className={styles.stackItems}>React</p>
                    <p className={styles.stackItems}>GitHub</p>
                    <p className={styles.stackItems}>html-react-parser</p>
                    <p className={styles.stackItems}>Vercel</p>
                </div>
                </div>
            </div>
        </>
    );
  }
  
  export default About;