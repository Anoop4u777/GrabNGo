import React from 'react'
import './RestaurantDisplay.css'
import { rest_list } from '../../assets/assets'
import RestItem from '../RestItem/RestItem'

const RestaurantDisplay = () => {
  return (
    <div className='rest-display' id="rest-dsiplay">
      <h2>Our Restarurants around you</h2>
      <div className='rest-display-list'>
        {rest_list.map((item, index)=>{
            return <RestItem key={index} id={item._id} name={item.name} description={item.description} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default RestaurantDisplay
