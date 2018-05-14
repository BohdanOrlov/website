import React from "react"
import Container from "../components/container";
import styles from "./index.module.css";
import onscroll from "../utils/onscroll.js";
import AboutImage from "./content/resources/about.png"

export default ({ data }) =>
    <Container>
        <div className={styles.hd}>Item1</div>
        <div className={styles.ct}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <img src={AboutImage} className={styles.headerImage} alt="" />
                </div>
            </div>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: data.about.html }} />
            </div>
            <div className={styles.header2}>
                <div className={styles.headerContainer}>
                    <img src={AboutImage} className={styles.headerImage} alt="" />
                </div>
            </div>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: data.work.html }} />
            </div>
            <div className={styles.header3}>
                <div className={styles.headerContainer}>
                    <img src={AboutImage} className={styles.headerImage} alt="" />
                </div>
            </div>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: data.contact.html }} />
            </div>
        </div>
        <div className={styles.ft}>Item4</div>
    </Container>

window.onload = function () {
    window.onscroll = onscroll
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