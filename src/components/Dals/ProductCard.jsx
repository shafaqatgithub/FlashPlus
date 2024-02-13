import React from 'react' 
import './ProductCard.css'
import { Link } from 'react-router-dom'
import AddToCart from '../AddToCart/AddToCart'

const ProductCard = ({ data }) => {
    return (
        <div className='product'>
            <div className='s1'>
                <img src={data.productimage} alt={'no image'} />
            </div>
            <div className='s2'>
                <h1>{data.productname}</h1>
                <h2>{data.productprice}</h2>
            </div>
            <Link to={'/AddToCart/${data.id}'}>
            <div className='addbtn'>
                <button>Add to cart</button>
            </div>
           
            </Link>
            

        </div>
    )
}




export default ProductCard
