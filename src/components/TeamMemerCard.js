import React from 'react'
import { useScrollingEffect } from '../utils/useScrollingEffect';
import instagram from "../images/Instagram.svg"
import youtube from "../images/YouTube.svg"

function TeamMemerCard(props) {
  const {image,name,designation,instagram_link,youtube_link}=props.data;
  useScrollingEffect();
  return (
    <div className="member-card-container"  data-aos="fade-up">
        <div className="member-photo-container">
            <img src={image} alt="error" />
        </div>
        <div className="member-content-container">
            <span className='h9'>{name}</span>
            <span className='memeber-designation h10'>{designation}</span>
            <div className="member-info-links">
                <a href={instagram_link}><img src={instagram} alt="error" /></a>
                <a href={youtube_link}><img src={youtube} alt="error" /></a>
            </div>
        </div>
    </div>
  )
}

export default TeamMemerCard