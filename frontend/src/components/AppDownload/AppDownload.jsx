import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience Download <br /> GrabNGo App</p>
      <div className="app-download-platfoms">
        <img src={assets.play_store} alt="play store icon" />
        <img src={assets.app_store} alt="app store icon" />
      </div>
    </div>
  )
}

export default AppDownload
