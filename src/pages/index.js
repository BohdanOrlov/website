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

import moonpigImage from "./content/resources/work/moonpig.png"
import chappyImage from "./content/resources/work/chappy.png"
import badooImage from "./content/resources/work/Badoo.png"
import onefinestayImage from "./content/resources/work/onefinestay.png"
import whooleyImage from "./content/resources/work/whooley.jpg"
import tptImage from "./content/resources/work/tpt.png"

export default ({ data }) => {
    // console.log(data.about.edges[0])

    return <Container>
        
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
                <div className={styles.aboutContent} dangerouslySetInnerHTML={{ __html: data.about.edges[0].node.html }} />
            </div>
            <div className={styles.header2}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitleDark}>Outreach</h1>
                </div>
            </div>
            <div className={styles.dark}>
                
            </div>
            <div className={styles.header3}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitle}>Work</h1>
                </div>
            </div>
            <div >
            <div className={styles.contentWork}>
                    <div className={styles.cropping}>
                        <img className={styles.workImage} src={moonpigImage} onClick={() => openURL('https://www.youtube.com/watch?v=YnoFQWrRwYo')} alt=""></img>
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.moonpig.edges[0].node.html }} />
                    <div className={styles.cropping}>
                        <img className={styles.workImage} src={chappyImage} onClick={() => openURL('https://www.youtube.com/watch?v=6d8XJ3LaFlM')} alt="" />
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.chappy.edges[0].node.html }} />
                    <div className={styles.cropping}>
                        <img className={styles.workImage} src={badooImage} onClick={() => openURL('https://www.youtube.com/watch?v=FwiQ3TCWptU')} alt=""></img>
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.badoo.edges[0].node.html }} />
                    <div className={styles.cropping}>
                        <img className={styles.workImage} src={onefinestayImage} onClick={() => openURL('https://www.youtube.com/watch?v=DZfMgtEyRCg')} alt="" />
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.onefinestay.edges[0].node.html }} />
                    <div className={styles.cropping}>
                        <img className={styles.workImage} src={whooleyImage} onClick={() => openURL('http://whooley.com/what-are-you-up-for/')} alt=""></img>
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.whooley.edges[0].node.html }} />
                    <div className={styles.cropping}>
                        <img className={styles.workImage} src={tptImage} onClick={() => openURL('https://www.youtube.com/watch?v=E4b1FLUMRXo')} alt="" />
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.tpt.edges[0].node.html }} />
                </div>
            </div>
        </div>

        <div className={styles.ft}>
            <ParticlesBottom />
            <div className={styles.socials}>
                <div className={styles.hexagon}><div className={styles.github} onClick={() => openURL('https://github.com/BohdanOrlov')} /></div>
                <div className={styles.hexagon}><div className={styles.medium} onClick={() => openURL('https://medium.com/@borlov')} /></div>
                <div className={styles.hexagon}><div className={styles.twitter} onClick={() => openURL('https://twitter.com/bohdan_orlov')} /></div>
                <div className={styles.hexagon}><div className={styles.facebook} onClick={() => openURL('https://www.facebook.com/bohdan.orlov')} /></div>
                <div className={styles.hexagon}><div className={styles.linkedIn} onClick={() => openURL('https://www.linkedin.com/in/bohdan-orlov-3a090255')} /></div>
                {/* <div className={styles.hexagon}><i className={`${styles.fa} ${styles.twitter}`}></i></div> */}
            </div>
        </div>
    </Container>
}
window.onload = function () {
    window.onscroll = onscroll
    lastNameShuffling()
};



export const query = graphql`
    query IndexQuery {
        about:  allMarkdownRemark(
                    filter: {fileAbsolutePath: {regex: "/(about)\\.md$/"}}, 
                    limit: 1
                ) {
                    edges {
                        node {
                            html
                        }
                    }
                }
        work: allMarkdownRemark(
                    filter: {fileAbsolutePath: {regex: "/(work)\\.md$/"}}, 
                    limit: 1
                ) {
                    edges {
                        node {
                            html
                        }
                    }
                }
        tpt: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(tpt)\\.md$/"}}, 
            limit: 1
        ) {
            edges {
                node {
                    html
                }
            }
        }
        whooley: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(whooley)\\.md$/"}}, 
            limit: 1
        ) {
            edges {
                node {
                    html
                }
            }
        }
        onefinestay: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(onefinestay)\\.md$/"}}, 
            limit: 1
        ) {
            edges {
                node {
                    html
                }
            }
        }
        badoo: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(badoo)\\.md$/"}}, 
            limit: 1
        ) {
            edges {
                node {
                    html
                }
            }
        }
        chappy: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(chappy)\\.md$/"}}, 
            limit: 1
        ) {
            edges {
                node {
                    html
                }
            }
        }
        moonpig: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(moonpig)\\.md$/"}}, 
            limit: 1
        ) {
            edges {
                node {
                    html
                }
            }
        }
  }
`;