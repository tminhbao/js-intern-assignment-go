import React from 'react'
import logo from '../../../assets/nike.png'
import ProductItem from '../../Product/ProductItem/ProductItem'

const CardProduct = () => {
    return (
        <div className='card row overflow-auto mx-auto shadow p-3 mb-5 bg-body'>
            <div class="card-body p-0 position-relative">
                <div className='position-fixed'>
                    <div className='pb-1'>
                        <img src={logo} className='card-logo' alt='card-logo' />
                    </div>
                    <h3 class="card-title fw-bold">Our products</h3>
                </div>
                <div className='card-content'>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}

export default CardProduct