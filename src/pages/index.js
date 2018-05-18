import React from "react"
import Container from "../components/container";
import Particles from "../components/particles";
import ParticlesBottom from "../components/particlesBottom";
import styles from "./index.module.css";
import hexagonStyles from "./hexagon.css";
import onscroll from "../utils/onscroll.js"
import openURL from "../utils/openURL.js";
import lastNameShuffling from "../utils/lastNameShuffling";
import PhotoImage from "./content/resources/hexagon.png"
import BadooImage from "./content/resources/work/Badoo.png"
import ChappyImage from "./content/resources/work/Chappy.png"
import onefinestayImage from "./content/resources/work/onefinestay.png"

export default ({ data }) =>
    <Container>

        <div className={styles.hd}>
            <h1 className={styles.name}>Bohdan</h1>
            <h1 className={styles.name} id="variableLastName"></h1>
            <Particles />
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
                <div className={styles.contentWork}>
                    <div className={styles.cropping}>
                        <img className={styles.workImage} onClick={() => openURL('https://www.youtube.com/watch?v=FwiQ3TCWptU')} src={BadooImage} alt=""></img>
                        {/* <div className={styles.hexagonContainer}>
                            <div className={styles.hexagon}></div>
                        </div> */}
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.work.html }} />
                    <img className={styles.workImage} src={ChappyImage} alt="" />
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.work.html }} />
                    <img className={styles.workImage} src={onefinestayImage} alt="" />
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.work.html }} />
                </div>
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

        <div className={styles.ft}>
            <ParticlesBottom />
            <div className={styles.socials}>
                <div className={styles.hexagon}><div className={styles.github} onClick={() => openURL('https://github.com/BohdanOrlov')}/></div>
                <div className={styles.hexagon}><div className={styles.medium} onClick={() => openURL('https://medium.com/@borlov')}/></div>
                <div className={styles.hexagon}><div className={styles.twitter} onClick={() => openURL('https://twitter.com/bohdan_orlov')}/></div>
                <div className={styles.hexagon}><div className={styles.facebook} onClick={() => openURL('https://www.facebook.com/bohdan.orlov')}/></div>
                <div className={styles.hexagon}><div className={styles.linkedIn} onClick={() => openURL('https://www.linkedin.com/in/bohdan-orlov-3a090255')}/></div>
                {/* <div className={styles.hexagon}><i className={`${styles.fa} ${styles.twitter}`}></i></div> */}
            </div>
        </div>
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