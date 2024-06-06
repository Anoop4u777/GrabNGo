import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState('home');
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='Grab N Go' className='logo' /></Link>
      <ul className='navbar-menu'>
      <Link to='/'><li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>home</li></Link>
        <Link to='/restaurant'><li onClick={()=>setMenu('restaurants')} className={menu==='restaurants'?'active':''}>restaurants</li></Link>
        <li onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>mobile-app</li>
        <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>contact-us</li>
        <li onClick={()=>setMenu('about-us')} className={menu==='about-us'?'active':''}>about-us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search' />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
            <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
