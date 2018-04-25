import React from "react"
import Container from "../components/container";
import styles from "./index.module.css";



export default () =>
    <Container>
        <div className={styles.hd}>Item1</div>
        <div className={styles.ct}>
            <div>Item2</div>
            <div>Item3</div>
        </div>
        <div className={styles.ft}>Item4</div>
    </Container>