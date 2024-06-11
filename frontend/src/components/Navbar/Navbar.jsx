import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState('Home');
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='Grab N Go' className='logo' /></Link>
      <ul className='navbar-menu'>
      <Link to='/'><li onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</li></Link>
        <Link to='/restaurant'><li onClick={()=>setMenu('Restaurants')} className={menu==='Restaurants'?'active':''}>Restaurants</li></Link>
        <li onClick={()=>setMenu('Mobile-App')} className={menu==='Mobile-App'?'active':''}>Mobile-App</li>
        <li onClick={()=>setMenu('Contact-Us')} className={menu==='Contact-Us'?'active':''}>Contact-Us</li>
        <li onClick={()=>setMenu('About-Us')} className={menu==='About-Us'?'active':''}>About-Us</li>
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
