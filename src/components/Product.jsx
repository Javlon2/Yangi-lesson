import React from 'react'
import './index.css'

const Product = ({item}) => {
    const {title ,description,thumbnail,brand} = item
  return (
    <div className='container card-2'>
         <div className='card'>
            <h1>{title}</h1>
            <p>{description}</p>
            <img   src={thumbnail} alt="" />
            <p style={{marginTop:'20px'}}>{brand}</p>
         </div>
    </div>
  )
}

export default Product