import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Info</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
        </div>
        <input type='email' placeholder='Email Address' />
        <input type='text' placeholder='Street Address' />
        <div className='multi-fields'>
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='Province'/>
        </div>
        <input type='text' placeholder='Postal Code'/>
        <input type='text' placeholder='Phone Number' />
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>                
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>     
            </div>
          </div>
          <button>Payment</button>
        </div>
      </div>
    </form>
  )
}


export default PlaceOrder
