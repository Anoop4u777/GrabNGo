import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets.js'

const Add = () => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
      name: "",
      description: "",
      price: "",
      category: "Salad"
    })

  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-image-upload flex-col">
          <p>
            Upload Image
          </p>
          <label htmlFor="image">
            <img src={image? URL.createObjectURL(image): assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" name='name' placeholder='Type here' />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" rows="6" placeholder='Write product description' required></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product Category</p>
            <select name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input type="Number" name='price' placeholder='20 CAD' />
          </div>
        </div>

        <button type='submit' className='add-button'>Add Food Item</button>

      </form>
    </div>
  )
}

export default Add
