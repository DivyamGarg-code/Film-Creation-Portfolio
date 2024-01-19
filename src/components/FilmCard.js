import React,{useEffect} from 'react'
import FilmCarousal from '../components/FilmCarousal'
import { useScrollingEffect } from '../utils/useScrollingEffect';

function FilmCard(props) {
  const { image, title, content, card_link, recent_films } = props.data;
  const idx = props.index;
  useScrollingEffect();
  // console.log(idx);
  // console.log(image, title, content, card_link, recent_films);
  // console.log(recent_films);
  return (
    <div className='card_section app'>
      <div className='film-card-container section_width' style={{ flexDirection: idx % 2 == 0 ? "row" : "row-reverse" }} data-aos="fade-up">
        <div className="text-container">
          <div className='film_card_heading'>{title}</div>
          <div className='film-card-content'>{content}</div>
          <a href={card_link} target='_blank'>
            <div className='film-card-btn btn'>Watch Now</div>
          </a>
        </div>
        <a href={card_link} target='_blank'><img className="film-card-image" src={image} alt="error" /></a>
      </div>
      {recent_films != null ? <FilmCarousal recent_films={recent_films} /> : ""}
    </div>
  )
}

export default FilmCard
