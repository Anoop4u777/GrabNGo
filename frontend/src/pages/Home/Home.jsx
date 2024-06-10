import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import AppDownload from '../../components/AppDownload/AppDownload'
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay'

const Home = () => {
  
  return (
    <div className='home-page'>
      <Header />
      <RestaurantDisplay count={3}/>
      <AppDownload />
    </div>
  )
}

export default Home
