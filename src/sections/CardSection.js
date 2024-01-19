import React,{useEffect} from 'react'
import { filmCardData } from '../utils/filmCardData'
import FilmCard from '../components/FilmCard'

function CardSection() {
  return (
    <div className='section_wrapper app'>
        {filmCardData.map((cardData,index)=>{
            console.log(cardData);
            return <FilmCard key={index} data={cardData} index={index}/>
        })}
    </div>
  )
}

export default CardSection