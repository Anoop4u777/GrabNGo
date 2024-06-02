import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Our Delicious Menu</h1>
      <p className='explore-menu-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <div className='explore-menu-list'>
        { menu_list.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev === item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="menu-image" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
