import React, { useState } from 'react';
import './RestaurantDetail.css';
import { useParams } from 'react-router-dom';
import { rest_list } from '../../assets/assets';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import LeafletMap from '../LeafletMap/LeafletMap';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = rest_list.find(item => item._id === id);
  const [category, setCategory] = useState("All");

  if (!restaurant) {
    return <h1>Restaurant not found</h1>;
  }

  return (
    <div className='rest-detail'>
      <h1>{restaurant.name}</h1>
      <img className="rest-detail-img" src={restaurant.image} alt={restaurant.name} />
      <div className='rest-detail-desc'>
        <div className='left-column'>
          <h1>About us</h1>
          <p>{restaurant.description}</p>
        </div>
        <div className='right column'>
          <LeafletMap latitude={restaurant.latitude} longitude={restaurant.longitude} name={restaurant.name} category={restaurant.category} location={restaurant.location} />
        </div>
      </div>

      <hr />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <hr />
    </div>
  );
};

export default RestaurantDetail;
