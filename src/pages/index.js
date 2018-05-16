import React from "react"
import Container from "../components/container";
import styles from "./index.module.css";
import onscroll from "../utils/onscroll.js";
import lastNameShuffling from "../utils/lastNameShuffling";
import PhotoImage from "./content/resources/hexagon.png"

export default ({ data }) =>
    <Container>
        <div className={styles.hd}>
            <h1 className={styles.name}>Bohdan</h1>
            <h1 className={styles.name} id="variableLastName"></h1>
        </div>
        <div className={styles.ct}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitle}>About</h1>
                    <img src={PhotoImage} className={styles.photoImage} alt="Bohdan Orlov" />
                </div>
            </div>
            <div>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.about.html }} />
            </div>
            <div className={styles.header2}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitleDark}>Work</h1>
                </div>
            </div>
            <div className={styles.dark}>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.work.html }} />
            </div>
            <div className={styles.header3}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitle}>Contact</h1>
                </div>
            </div>
            <div >
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.contact.html }} />
            </div>
        </div>
        <div className={styles.ft}>Item4</div>
    </Container>

window.onload = function () {
    window.onscroll = onscroll
    lastNameShuffling()
};

export const query = graphql`
    query IndexQuery {
        about: markdownRemark(headings:  { value: { eq:"About me"}}) {
            html
        }
        work: markdownRemark(headings:  { value: { eq:"Work"}}) {
            html
        }
        contact: markdownRemark(headings:  { value: { eq:"Contact"}}) {
            html
        }
  }
`;