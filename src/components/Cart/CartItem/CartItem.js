import React from 'react'
import trashLogo from "../../../assets/trash.png"
import plusImg from "../../../assets/plus.png";
import minusImg from "../../../assets/minus.png";
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeProductFromCart } from '../../../redux/reducers/cartReducer';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleRemoveProductFromCart = () => {
        dispatch(removeProductFromCart(item))
    }
    const handleIncrementProduct = () => {
        dispatch(incrementQuantity(item))
    }
    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(item))
    }
    return (
        <div className='row cart-item mx-1 align-items-center w-100 animate__animated animate__fadeIn'>
            <div className='col-lg-4 col-md-4 col-sm-4 cart-item-left'>
                <div className='card-circle position-relative shadow' style={{ backgroundColor: `${item?.color}` }}>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png' alt='cart-item-img' className=' cart-item-img position-absolute' />
                </div>
            </div>
            <div className='col-lg-8 col-md-8 col-sm-8 cart-item-right'>
                <p className='title fw-bold mb-0' style={{ fontSize: '13px' }}>{item?.name}</p>
                <p className='fw-bold my-1'>${item?.price}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <button className='remove-quantity-btn' onClick={handleDecrementQuantity}>
                            <img src={minusImg} alt='minus-icon' />
                        </button>
                        <span className='mx-2'>{item?.quantity}</span>
                        <button className='add-quantity-btn' onClick={handleIncrementProduct}>
                            <img src={plusImg} alt='plus-icon' />
                        </button>
                    </div>
                    <button className='trash-logo-btn' onClick={handleRemoveProductFromCart}>
                        <img src={trashLogo} alt='trash-logo' className='w-100 trash-logo-btn-img' />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CartItem