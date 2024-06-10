import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './RestItem.css'
import { assets } from '../../assets/assets'

const RestItem = ({id, name, category, image}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className='rest-item' onClick={handleClick}>
      <div className="rest-item-image-container">
        <img className='rest-item-image' src={image} alt='rest-item-image' />
      </div>
      <div className="rest-item-info">
        <div className="rest-item-name-rating">
            <p>
              {name}
              <br/>
              {category}
            </p>
            {/* <img src={assets.rating_starts} alt="" /> */}
        </div>
        {/* <p className="rest-item-description">
            {description}
        </p> */}
      </div>
    </div>
  )
}

export default RestItem
