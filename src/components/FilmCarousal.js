import React from 'react';
import Title from './Title';
import { useScrollingEffect } from '../utils/useScrollingEffect';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const SidePaddingCarousel = ({ film_list }) => {
    const window_width = window.innerWidth;
    // const { film_list } = props;
    useScrollingEffect();
    // window_width > 1000 ? film_list.length < 3 ? "400px" : "900px" : "400px" in style 
    // 
    return (
        <div className="side-padding-carousel" style={{ maxWidth: window_width > 1000 ? "400px" : "300px" }} data-aos="fade-up">
            <Splide
                options={{
                    type: 'loop',
                    gap: 10, // Adjust the gap between slides as per your preference
                    perPage: 1, // Show only one slide at a time
                    perMove: 1,
                    focus: 'center',
                    padding: "0rem",
                    pagination: false, // Disable pagination
                    arrows: film_list.length > 1, // Show arrows only when there are more than 2 slides
                    autoplay: true, // Enable autoplay
                    interval: 4000, // Set the interval to 1000 milliseconds (1 second)
                    speed: 3200, // Set the transition speed to 800 milliseconds (adjust as needed)
                    ease: 'ease-in-out', // Set the easing function (adjust as needed)
                }}
            >
                {film_list.map((film, index) => {
                    return <SplideSlide key={index}>
                        <a href={film.link} target='_blank' title={film.title}><img className="film-carousal-image" src={film.thumbnail} alt="error" /></a>
                    </SplideSlide>
                })}
            </Splide>
        </div>
    );
};

const CarousalSection = ({ film_list }) => {
    // const { title, film_list } = props.recent_films;
    return (
        <SidePaddingCarousel film_list={film_list} />
        // <div className="section_wrapper app">
        //     <Title title={title} />
        // </div>
    );
}

export default CarousalSection;
