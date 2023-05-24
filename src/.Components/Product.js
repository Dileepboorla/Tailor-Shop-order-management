import React from 'react'

export default function Product(props) {

  return (
    <div className='row-mt-3'>
        <div className='col-5'>
            <p>Name of the Customer  :  </p>
            <p>Type of the order  :  </p>
            <p>Price of the order :  </p>
          </div>
          <div className='col-6'>
            <p>{props.product.name}</p>
            <p>{props.product.typeoforder}</p>
            <p>₹{props.product.price}</p>
          </div>
        <div className='col-3'>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn-btn-danger" onClick={() => {props.decrementQuantity(props.index)}}>-</button>
            <button type="button" className="btn-btn-warning">{props.product.quantity}</button>
            <button type="button" className="btn-btn-danger" onClick={() => {props.incrementQuantity(props.index)}}>+</button>
        </div>
        </div>
        <div className='col-2'>
            {props.product.quantity * props.product.price}
        </div>
        <br/><button className='col-2-btn-btn-danger-mb-4-mt-4' onClick={() => {props.removeItem(props.index)}}>
          Remove
        </button>
    </div>
  )
}
