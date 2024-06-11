import React from 'react'
import './AppFeatures.css'
import { assets } from '../../assets/assets'

const AppFeatures = () => {
    return (
        <div className='app-features-main'>
            <h1>Our features</h1>
            <hr />
            <div className='app-features-first'>
            <div className='image-container'>
                    <img src={assets.on_demand} alt=''></img>
                </div>
                <div className='text-container'>
                    <h2>On-Demand Food Ordering</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                
            </div>
            <hr />
            <div className='app-features-second'>
                
                <div className='text-container'>
                    <h2>Simple Payment Methods</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className='image-container'>
                    <img src={assets.simple_payment} alt=''></img>
                </div>
            </div>
            <hr />
            <div className='app-features-third'>
            <div className='image-container'>
                    <img src={assets.rating_review} alt=''></img>
                </div>
                <div className='text-container'>
                    <h2>Ratings and Reviews</h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default AppFeatures
