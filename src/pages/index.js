import React from "react"
import Container from "../components/container";
import Navigation from "../components/navigation";
import ContentItem from "../components/contentItemWithImage";
import Particles from "../components/particles";
import ParticlesBottom from "../components/particlesBottom";
import styles from "./index.module.css";
import onscroll from "../utils/onscroll.js"
import openURL from "../utils/openURL.js";
import lastNameShuffling from "../utils/lastNameShuffling";

import photoImage from "./content/resources/cropped.jpg"

import architectureImage from "./content/resources/contributions/architecture.jpeg"
import roadmapImage from "./content/resources/contributions/roadmap.png"
import matrixImage from "./content/resources/contributions/matrix_cut.png"

import moonpigImage from "./content/resources/work/moonpig.png"
import chappyImage from "./content/resources/work/chappy.png"
import badooImage from "./content/resources/work/Badoo.png"
import onefinestayImage from "./content/resources/work/onefinestay.png"
import whooleyImage from "./content/resources/work/whooley.jpg"
import tptImage from "./content/resources/work/tpt.png"

import metaimage from "./content/resources/metaimage.png"

export default ({ data }) => {
    return <Container>
        <div className={styles.hd}>
            <h1 className={styles.name}>BOHDAN</h1>
            <h1 className={`${styles.name} ${styles.lastNameCommon}`} id="variableLastName"></h1>
            <Particles />
            <div className={styles.navigationContainer}>
                <Navigation />
            </div>
        </div>

        <div className={styles.ct}>
            <div className={styles.header}>
                <div className={styles.headerContainer} id="about">
                    <h1 className={`${styles.headerTitle} ${styles.lightColor}`}>About</h1>
                    <div className={styles.photoImage}>
                        <div className={styles.hexagonImage} style={{ backgroundImage: "url(" + photoImage + ")" }}>
                            <div className={styles.hexTopImage}></div>
                            <div className={styles.hexBottomImage}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.aboutContent} dangerouslySetInnerHTML={{ __html: data.about.edges[0].node.html }} />
            </div>
            <div className={styles.header2}>
                <div className={styles.headerContainer} id="contributions">
                    <h1 className={`${styles.headerTitle} ${styles.darkColor}`}>Contributions</h1>
                </div>
            </div>
            <div className={styles.dark}>
                <ContentItem data={{ image: architectureImage, url: 'https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52', html: data.architecture.edges[0].node.html }} />
                <ContentItem data={{ image: matrixImage, url: 'https://github.com/BohdanOrlov/ios-skills-matrix', html: data.matrix.edges[0].node.html }} />
                <ContentItem data={{ image: roadmapImage, url: 'https://github.com/BohdanOrlov/iOS-Developer-Roadmap', html: data.roadmap.edges[0].node.html }} />
            </div>
            <div className={styles.header3}>
                <div className={styles.headerContainer} id="work">
                    <h1 className={`${styles.headerTitle} ${styles.lightColor}`}>Work</h1>
                </div>
            </div>
            <div >
                <ContentItem data={{ image: moonpigImage, url: 'https://www.youtube.com/watch?v=YnoFQWrRwYo', html: data.moonpig.edges[0].node.html }} />
                <ContentItem data={{ image: chappyImage, url: 'https://www.youtube.com/watch?v=6d8XJ3LaFlM', html: data.chappy.edges[0].node.html }} />
                <ContentItem data={{ image: badooImage, url: 'https://www.youtube.com/watch?v=FwiQ3TCWptU', html: data.badoo.edges[0].node.html }} />
                <ContentItem data={{ image: onefinestayImage, url: 'https://www.youtube.com/watch?v=DZfMgtEyRCg', html: data.onefinestay.edges[0].node.html }} />
                <ContentItem data={{ image: whooleyImage, url: 'http://whooley.com/what-are-you-up-for/', html: data.whooley.edges[0].node.html }} />
                <ContentItem data={{ image: tptImage, url: 'https://www.youtube.com/watch?v=E4b1FLUMRXo', html: data.tpt.edges[0].node.html }} />
            </div>
        </div>

        <div className={styles.ft} id="contact">
            <ParticlesBottom />
            <div className={styles.socials}>
                <div className={styles.hexagon} onClick={() => openURL('https://github.com/BohdanOrlov')}>
                    <div className={`${styles.socialsCommon} ${styles.github}`} />
                </div>
                <div className={styles.hexagon} onClick={() => openURL('https://medium.com/@borlov')} >
                    <div className={`${styles.socialsCommon} ${styles.medium}`} />
                </div>
                <div className={styles.hexagon} onClick={() => openURL('https://twitter.com/bohdan_orlov')} >
                    <div className={`${styles.socialsCommon} ${styles.twitter}`} />
                </div>
                <div className={styles.hexagon} onClick={() => openURL('https://www.facebook.com/bohdan.orlov')}>
                    <div className={`${styles.socialsCommon} ${styles.facebook}`} />
                </div>
                <div className={styles.hexagon} onClick={() => openURL('https://www.linkedin.com/in/bohdan-orlov-3a090255')}>
                    <div className={`${styles.socialsCommon} ${styles.linkedIn}`} />
                </div>
                <div className={styles.hexagon} onClick={() => openURL('https://www.instagram.com/b0rlov/')}>
                    <div className={`${styles.socialsCommon} ${styles.instagram}`} />
                </div>
            </div>
        </div>
        <div className={styles.preloader} id="preloader"></div>
        <title>Bohdan Orlov - iOS Engineer &amp; Team Lead</title>
        <meta name="description" content="I’m an iOS Engineer and Team Lead from Ukraine living in London" />
        <meta name="keywords" content="ios, swift, objc, objective-c, architecture, articles, roadmap" />
        <meta name="author" content="Bohdan Orlov" />
        <meta property="og:url" content="http://www.arch.guru" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Bohdan Orlov - iOS Engineer &amp; Team Lead" />
        <meta property="og:description" content="I’m an iOS Engineer and Team Lead from Ukraine living in London" />
        <meta property="og:image" content={metaimage} />
    </Container>
}
if (typeof window !== 'undefined') {
    window.onload = function () {
        onscroll()
        window.onscroll = onscroll
        lastNameShuffling()
        document.getElementById("preloader").style.visibility = "hidden";
    };
}


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
        matrix: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(matrix)\\.md$/"}}, 
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