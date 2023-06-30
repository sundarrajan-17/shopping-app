import React from 'react'
import './Cart.css'

const Cart = ({Cartitems,total,AddtoCart,removefromcart}) => {
  console.log(Cartitems)
  return (
    <div className='container-fluid'>
        <div className='cart-header'>
        <div className='row d-flex justify-content-between'>
            <h1 className='total' style={{color:'rgb(60, 71, 71)'}}>Total Amount: ${total.toFixed(2)}</h1>
            <button className='buynow-btn'>Buy Now</button>
        </div>
        </div>
    <div className='row cartitem'>
        <div className='col'>
            <div className='row'> 
                {Cartitems.map((value) => {
                console.log(value)
                return (
                    <div className="card" key={value.id}>
                        <img src={value.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{value.title}</h5>
                            <p className="card-text">{value.description}</p>
                            <p>Price: ${value.price}</p>
                            <p>Rating: {value.rating.rate}</p>
                            <button className='cart-btn' onClick={()=>AddtoCart(value)}>+</button><span>{value.quantity}</span><button className='cart-btn' onClick={()=>removefromcart(value)}>-</button>
                        </div>
                    </div>
                )
                })}
           </div>
       </div>
    </div>
</div>
  )
}

export default Cart