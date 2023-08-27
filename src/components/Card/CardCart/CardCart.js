import React from 'react'
import logo from '../../../assets/nike.png'
import CartItem from '../../Cart/CartItem/CartItem'
import { useSelector } from 'react-redux';

const CardCart = () => {
    const { listCarts, totalMoney } = useSelector((state) => state.cartReducer);
    return (
        <div className='card row overflow-auto mx-auto shadow p-3 mb-5' >
            <div className="card-body p-0">
                <div className='sticky-top cart-sticky card-header'>
                    <div className='pb-1'>
                        <img src={logo} className='card-logo' alt='card-logo' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center cart-title-price' >
                        <h3 className="fw-bold">Your cart</h3>
                        <h3>${totalMoney === 0 ? `0.00` : totalMoney}</h3>
                    </div>
                </div>
                <div className='card-content'>
                    {listCarts.length > 0 ? listCarts.map(item => <CartItem item={item} key={item?.id} />) : <p className='mt-4'>Your cart is empty</p>}
                </div>
            </div>
        </div>
    )
}

export default CardCart