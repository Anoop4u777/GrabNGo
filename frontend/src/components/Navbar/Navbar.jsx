import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState('Home');
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem('token');
      setToken('');
      navigate('/');
    }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='Grab N Go' className='logo' /></Link>
      <ul className='navbar-menu'>
      <Link to='/'><li onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</li></Link>
      <Link to='/restaurant'><li onClick={()=>setMenu('Restaurants')} className={menu==='Restaurants'?'active':''}>Restaurants</li></Link>
      <Link to='/mobile'><li onClick={()=>setMenu('Mobile-App')} className={menu==='Mobile-App'?'active':''}>Mobile</li></Link>
        <li onClick={()=>setMenu('Contact-Us')} className={menu==='Contact-Us'?'active':''}>Contact-Us</li>
        <li onClick={()=>setMenu('About-Us')} className={menu==='About-Us'?'active':''}>About-Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search' />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
            <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>Sign In</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt='account profile' />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>{
                navigate('/myorders')
              }}><img src={assets.bag_icon} alt='Order Bag' /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt='Logout Icon' /><p>Logout</p></li>
            </ul>
         </div>}
        
      </div>
    </div>
  )
}

export default Navbar
