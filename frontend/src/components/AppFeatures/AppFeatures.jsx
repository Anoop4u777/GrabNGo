import React from 'react'
import './AppFeatures.css'
import { assets } from '../../assets/assets'

const AppFeatures = () => {
    return (
        <div className='app-features-main'>
            <h1 style={{textAlign: 'center'}}>Our features</h1>
            <hr />
            <div className='app-features-first'>
            <div className='image-container'>
                    <img src={assets.on_demand} alt=''></img>
                </div>
                <div className='text-container'>
                    <h2>On-Demand Food Ordering</h2>
                    <p>
                    With GrabNGo, satisfying your cravings has never been easier. Our intuitive platform lets you order your favorite dishes with just a few taps, anytime and anywhere. Whether you’re at home, at work, or on the go, your next meal is always within reach.
                    </p>
                </div>
                
            </div>
            <hr />
            <div className='app-features-second'>
                
                <div className='text-container'>
                    <h2>Simple Payment Methods</h2>
                    <p>
                    We make paying for your order simple and secure. Choose from multiple payment options, including credit/debit cards, mobile wallets, and more, all protected by industry-standard encryption.
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
                    Hear what our customers have to say! At GrabNGo, we value your feedback and are committed to continuously improving your experience. Our ratings and reviews section gives you the opportunity to see what others are saying about their favorite dishes, delivery experiences, and more.

Browse through honest reviews and ratings from our community to help you make informed choices. Whether you’re trying something new or sticking to your go-to meal, the experiences shared by other customers can guide your decisions and enhance your dining experience.

Your opinion matters—don’t forget to leave your own review after enjoying your meal. Together, we can make GrabNGo even better!
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default AppFeatures
