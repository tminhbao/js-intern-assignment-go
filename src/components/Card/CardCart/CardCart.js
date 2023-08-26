import React from 'react'
import logo from '../../../assets/nike.png'
import CartItem from '../../Cart/CartItem/CartItem'

const CardCart = () => {
    return (
        <div className='card row overflow-auto mx-auto shadow p-3 mb-5 bg-body' >
            <div class="card-body p-0">
                <div className='position-fixed'>
                    <div className='pb-1'>
                        <img src={logo} className='card-logo' alt='card-logo' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center cart-title-price' style={{ width: '292px' }} >
                        <h3 class="fw-bold">Your cart</h3>
                        <h3>$358.94</h3>
                    </div>
                </div>
                <div className='card-content'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        </div>
    )
}

export default CardCart