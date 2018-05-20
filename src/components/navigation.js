import React from "react";
import styles from "./navigation.module.css";

export default ({ children }) => (
    <div className={styles.navigation}>
        <ul>
            <li><a href="#about">ABOUT </a></li>
            <li>|</li>
            <li><a href="#outreach">OUTREACH</a></li>
            <li>|</li>
            <li><a href="#work">WORK</a></li>
            <li>|</li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    </div>
);
