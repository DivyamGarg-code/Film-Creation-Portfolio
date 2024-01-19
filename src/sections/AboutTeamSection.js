import React from 'react'
import {aboutTeamData} from "../utils/aboutTeamData"
import TeamMemerCard from '../components/TeamMemerCard'
import Title from '../components/Title'

function AboutTeamSection() {
  return (
    <div className='section_wrapper app' style={{gap:"10px"}}>
        <div className='aboutTeam_heading'>
            <Title title={"About Our Team"}/>
            <span className='h9'>An exceptional team that understands the power of storytelling.</span>
        </div>
        <div className='teamCards_container'>
            {aboutTeamData.map((data,index)=>{
                return <TeamMemerCard key={index} data={data} />
            })}
        </div>
    </div>
  )
}

export default AboutTeamSection