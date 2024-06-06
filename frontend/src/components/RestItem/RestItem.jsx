import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './RestItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const RestItem = ({id, name, description, image}) => {

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
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="rest-item-description">
            {description}
        </p>
      </div>
    </div>
  )
}

export default RestItem
