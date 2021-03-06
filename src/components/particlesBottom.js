import React from "react";
import Particles from 'react-particles-js';
import styles from "./particlesBottom.module.css";

export default ({ children }) => (
    <Particles className={styles.particles} params={{
        particles: {
            number: {
                value: 40,
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'polygon',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 6
                },
            },
            opacity: {
                value: 1,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 1,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.1,
                    sync: true
                }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 0,
                direction: 'top',
                random: true,
                straight: true,
                out_mode: 'out',
                attract: {
                    enable: false,
                    rotateX: 1200,
                    rotateY: 100000
                }
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: {
                    enable: true,
                    mode: 'bubble'
                },
                onclick: {
                    enable: false,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 10,
                    duration: 1,
                    opacity: 0.1,
                    speed: 1
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true,
    }} />
);
