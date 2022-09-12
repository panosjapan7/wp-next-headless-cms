import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/navbar.module.css'

function NavBar() {
    return (
      <div className={styles.navbar}>
        
          <div className={styles.logo}>
            {/* <Link href="/">
            </Link> */}
          </div>

          <div id="menu" className={styles.menuContainer}>
            <Link href="/">
                <div className={styles.logoHomeContainer}>
                    <p className={styles.logo}>WEBB21</p>
                    <p className={styles.link}>Home</p>
                </div>
            </Link>
            <Link href="/about">
                <p className={styles.link}>About</p>
            </Link>
          </div>
      </div>
    );
  }
  
  export default NavBar;