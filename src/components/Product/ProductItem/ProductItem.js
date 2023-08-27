import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../../redux/reducers/cartReducer';
import checkIcon from '../../../assets/check.png'

const ProductItem = ({ shoe }) => {
    const dispatch = useDispatch();
    const handleAddProduct = () => {
        dispatch(addProductToCart(shoe))
    }
    const { listCarts } = useSelector((state) => state.cartReducer);
    const itemInCart = listCarts.find(item => item.id === shoe?.id);
    return (
        <div className='product-item mx-1 my-4'>
            <div style={{ backgroundColor: `${shoe?.color}` }} className='product-img-wrapper overflow-hidden'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png' alt='product-img'
                    className='w-100 product-img' />
            </div>
            <h5 className='my-4 fw-bold'>{shoe?.name}</h5>
            <p className='description'>
                {shoe?.description}
            </p>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold mb-0'>${shoe?.price}</h5>
                {itemInCart ? <button className='check-btn'>
                    <img src={checkIcon} alt='check-icon' className='w-75 animate__animated animate__fadeInRight' />
                </button> : <button className='add-to-cart-btn' onClick={handleAddProduct}>Add to cart</button>}

            </div>
        </div >
    )
}

export default ProductItem