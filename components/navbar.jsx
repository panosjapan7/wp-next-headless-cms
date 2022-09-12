import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/navbar.module.css'

function NavBar() {
    return (
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="logo">
            {/* <Link href="/">
            </Link> */}
          </div>
          <div id="menu">
            <Link href="/">
                <div>
                    <p className={styles.anchor}>WEBB21</p>
                    <p className={styles.anchor}>Home</p>
                </div>
            </Link>
            <Link href="/about">
                <p className={styles.anchor}>About</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;