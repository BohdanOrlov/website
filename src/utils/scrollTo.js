import React from "react";
import animate from "./animate.js"  
import onscroll from "./onscroll.js"  

export default (target) => {
    var elementTop = document.getElementById(target).getBoundingClientRect().top
    var current = document.documentElement.scrollTop
    animate({
        duration: 1000,
        timing(t) {
            return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
        },
        draw(progress) {
            window.scrollTo(0, current + (progress * (elementTop - current)));
            onscroll();
        }
    });
};