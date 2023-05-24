import React from 'react';

export default function Footer(props) {
  return (
    <div className='row-fixed-bottom'>
        <button className='btn-btn-dangercol-2' onClick={() => {
            props.resetQuantity()
        }}>
            Reset
        </button><br/>
        <div className='col-8'>
            <label>Total amount : </label>
            {props.totalAmount}
        </div>
    </div>
  )
}
