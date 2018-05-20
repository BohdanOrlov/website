import React from "react"
import Container from "../components/container";
import Navigation from "../components/navigation";
import ContentItem from "../components/contentItemWithImage";
import Particles from "../components/particles";
import ParticlesBottom from "../components/particlesBottom";
import styles from "./index.module.css";
import hexagonStyles from "./hexagon.css";
import onscroll from "../utils/onscroll.js"
import openURL from "../utils/openURL.js";
import lastNameShuffling from "../utils/lastNameShuffling";
import PhotoImage from "./content/resources/hexagon.png"

import architectureImage from "./content/resources/outreach/architecture.jpeg"
import roadmapImage from "./content/resources/outreach/roadmap.png"

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
            <div className={styles.navigationContainer}>
                <Navigation />
            </div>
        </div>

        <div className={styles.ct}>
            <div className={styles.header}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitle} id="about">About</h1>
                    <img src={PhotoImage} className={styles.photoImage} alt="Bohdan Orlov" />
                </div>
            </div>
            <div>
                <div className={styles.aboutContent} dangerouslySetInnerHTML={{ __html: data.about.edges[0].node.html }} />
            </div>
            <div className={styles.header2}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitleDark} id="outreach">Outreach</h1>
                </div>
            </div>
            <div className={styles.dark}>
                <ContentItem data= {{ image: architectureImage, url: 'https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52', html: data.architecture.edges[0].node.html }}/>
                <ContentItem data= {{ image: roadmapImage, url: 'https://github.com/BohdanOrlov/iOS-Developer-Roadmap', html: data.roadmap.edges[0].node.html }}/>
            </div>
            <div className={styles.header3}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.headerTitle}>Work</h1>
                </div>
            </div>
            <div >
                <div className={styles.contentWork} id="work">
                    <ContentItem data= {{ image: moonpigImage, url: 'https://www.youtube.com/watch?v=YnoFQWrRwYo', html: data.moonpig.edges[0].node.html }}/>
                    <ContentItem data= {{ image: chappyImage, url: 'https://www.youtube.com/watch?v=6d8XJ3LaFlM', html: data.chappy.edges[0].node.html }}/>
                    <ContentItem data= {{ image: badooImage, url: 'https://www.youtube.com/watch?v=FwiQ3TCWptU', html: data.badoo.edges[0].node.html }}/>
                    <ContentItem data= {{ image: onefinestayImage, url: 'https://www.youtube.com/watch?v=DZfMgtEyRCg', html: data.onefinestay.edges[0].node.html }}/>
                    <ContentItem data= {{ image: whooleyImage, url: 'http://whooley.com/what-are-you-up-for/', html: data.whooley.edges[0].node.html }}/>
                    <ContentItem data= {{ image: tptImage, url: 'https://www.youtube.com/watch?v=E4b1FLUMRXo', html: data.tpt.edges[0].node.html }}/>
                </div>
            </div>
        </div>

        <div className={styles.ft} id="contact">
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
    onscroll()
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
        architecture: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(architecture)\\.md$/"}}, 
            limit: 1
        ) {
            edges {
                node {
                    html
                }
            }
        }
        roadmap: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(roadmap)\\.md$/"}}, 
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