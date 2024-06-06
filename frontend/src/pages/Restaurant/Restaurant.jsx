import React, { useState } from 'react'
import './Restaurant.css'
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay'


const Restaurant = () => {
  
  const [category, setCategory] = useState("All")

  return (
    <div>
      <RestaurantDisplay />
    </div>
  )
}

export default Restaurant
