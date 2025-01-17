import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets.js'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
      <NavLink to='/' className="sidebar-option">
          <img src={assets.analysis} alt="" />
          <p>Overview</p>
        </NavLink>
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Food Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.list_icon} alt="" />
          <p>List Food Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
