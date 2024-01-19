import React from 'react'
import Title from '../components/Title'
import { featureData } from '../utils/featureData'
import FeatureCard from '../components/FeatureCard'

function FeatureSection(props) {
    return (
        <div className='section_wrapper app'>
            <Title title={"Features"} />
            <div className='feature_container'>
                {featureData.map((data, index) => {
                    return <FeatureCard key={index} featureData={data} />
                })}
            </div>
        </div>
    )
}

export default FeatureSection