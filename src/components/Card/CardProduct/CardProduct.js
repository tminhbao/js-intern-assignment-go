import React from 'react'
import logo from '../../../assets/nike.png'
import ProductItem from '../../Product/ProductItem/ProductItem'
import shoes from "../../../data/shoes.json"

const CardProduct = () => {

    return (
        <div className='card row overflow-auto mx-auto shadow p-3 mb-5'>
            <div className="card-body p-0 cart-title-price" >
                <div className='sticky-top card-header'>
                    <div className='pb-1'>
                        <img src={logo} className='card-logo' alt='card-logo' />
                    </div>
                    <h3 className="card-title fw-bold">Our products</h3>
                </div>
                <div className='card-content'>
                    {shoes.shoes.map(shoe => <ProductItem shoe={shoe} key={shoe?.id} />)}
                </div>
            </div>
        </div >
    )
}

export default CardProduct