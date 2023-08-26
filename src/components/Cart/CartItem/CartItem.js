import React from 'react'
import trashLogo from "../../../assets/trash.png"
import plusImg from "../../../assets/plus.png";
import minusImg from "../../../assets/minus.png";

const CartItem = () => {
    return (
        <div className='row cart-item mx-1 align-items-center w-100'>
            <div className='col-lg-4 col-md-4 col-sm-4 cart-item-left'>
                <div className='card-circle position-relative shadow bg-body'>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png' alt='cart-item-img' className=' cart-item-img position-absolute' />
                </div>
            </div>
            <div className='col-lg-8 col-md-8 col-sm-8 cart-item-right'>
                <p className='title fw-bold mb-0' style={{ fontSize: '13px' }}>Nike Air Zoom Pegasus 36</p>
                <p className='fw-bold my-1'>$108.97</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <button className='add-quantity-btn'>
                            <img src={minusImg} alt='minus-icon' />
                        </button>
                        <span className='mx-2'>1</span>
                        <button className='remove-quantity-btn'>
                            <img src={plusImg} alt='plus-icon' />
                        </button>
                    </div>
                    <button className='trash-logo-btn'>
                        <img src={trashLogo} alt='trash-logo' className='w-100 trash-logo-btn-img' />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CartItem