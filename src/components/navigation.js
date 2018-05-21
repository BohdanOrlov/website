import React from "react";
import styles from "./navigation.module.css";
import scrollTo from "../utils/scrollTo.js"

export default () => {
    return (
        <div className={styles.navigation}>
            <ul>
                <li><a href="#about" onClick={() => {scrollTo("about")}}>ABOUT</a></li>
                <li>|</li>
                <li><a href="#outreach" onClick={() => {scrollTo("outreach")}}>OUTREACH</a></li>
                <li>|</li>
                <li><a href="#work" onClick={() => {scrollTo("work")}}>WORK</a></li>
                <li>|</li>
                <li><a href="#contact" onClick={() => {scrollTo("contact")}}>CONTACT</a></li>
            </ul>
        </div>
    );
};

