import React, { useState } from 'react';
import './RestaurantDetail.css';
import { useParams } from 'react-router-dom';
import { rest_list } from '../../assets/assets';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import FoodDisplay from '../FoodDisplay/FoodDisplay';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = rest_list.find(item => item._id === id);
  const [category, setCategory] = useState("All");

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
    <div className='rest-detail'>
      <h2>{restaurant.name}</h2>
      <img className="rest-detail-img" src={restaurant.image} alt={restaurant.name} />
      <p>{restaurant.description}</p>
      <hr />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default RestaurantDetail;
