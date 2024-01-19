import React from 'react';
import Title from './Title';
import { useScrollingEffect } from '../utils/useScrollingEffect';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const SidePaddingCarousel = (props) => {
    const window_width = window.innerWidth;
    const { film_list } = props;
    useScrollingEffect();
    return (
        <div className="side-padding-carousel" style={{ maxWidth: window_width > 1000 ? film_list.length < 3 ? "400px" : "900px" : "400px" }} data-aos="fade-up">
            <Splide
                options={{
                    type: 'loop',
                    // gap: 30, // Adjust the gap between slides as per your preference
                    gap: 0, // Adjust the gap between slides as per your preference
                    perPage: 1, // Show only one slide at a time
                    perMove: 1,
                    focus: 'center',
                    padding: window_width > 1000 ? film_list.length < 3 ? "0rem" : "14rem" : "0rem",
                    pagination: false, // Disable pagination
                    arrows: film_list.length > 1, // Show arrows only when there are more than 2 slides
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

const CarousalSection = (props) => {
    const { title, film_list } = props.recent_films;
    return (
        <div className="section_wrapper app">
            <Title title={title} />
            <SidePaddingCarousel film_list={film_list} />
        </div>
    );
}

export default CarousalSection;
