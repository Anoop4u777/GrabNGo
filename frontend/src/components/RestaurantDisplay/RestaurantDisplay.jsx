import React from 'react'
import './RestaurantDisplay.css'
import { rest_list } from '../../assets/assets'
import RestItem from '../RestItem/RestItem'

const RestaurantDisplay = ({count}) => {
  let new_rest_list;
  if (count){
    new_rest_list = rest_list.reverse()
    new_rest_list = new_rest_list.slice(0, 6)
  } else {
    new_rest_list = rest_list
  }
  return (
    <div className='rest-display' id="rest-dsiplay">
      <h2 style={{textAlign: 'center'}}>Our Restaurants around you</h2>
      <div className='rest-display-list'>
        {new_rest_list.map((item, index)=>{
            return <RestItem key={index} id={item._id} name={item.name} category={item.category} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default RestaurantDisplay
