import React from 'react'

const ProductItem = ({ shoe }) => {
    return (
        <div className='product-item mx-1'>
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
                <button className='add-to-cart-btn'>Add to cart</button>
            </div>
        </div >
    )
}

export default ProductItem