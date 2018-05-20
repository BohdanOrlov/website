import React from "react";
import styles from "./contentItemWithImage.module.css";
import openURL from "../utils/openURL.js";

export default ({ data }) => (
    <div>
        <div className={styles.cropping}>
            <img className={styles.workImage} src={ data.image } onClick={() => openURL(data.url)} alt=""></img>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
);
