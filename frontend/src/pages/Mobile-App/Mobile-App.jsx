import React, { useState } from 'react'
import './Mobile-App.css'
import AppDownload from '../../components/AppDownload/AppDownload'
import AppFeatures from '../../components/AppFeatures/AppFeatures'

const MobileApp = () => {
  
  return (
    <div className='mobile-page'>
      <AppFeatures />
      <AppDownload />
    </div>
  )
}

export default MobileApp