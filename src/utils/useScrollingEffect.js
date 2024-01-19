import React,{ useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for default styles

export function useScrollingEffect(){
    useEffect(() => {
        AOS.init({
            // Global settings:
            offset: 100, // offset (in px) from the top of the element
            duration: 1000, // duration (in ms) of the animation
            easing: 'ease-in-sine', // timing function for the animation
            delay: 0, // delay (in ms) before the animation starts
            once: 'true'
        });
    }, []);
}