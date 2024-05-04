import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getApi = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        setProducts(data.products)
    }  
    getApi()
  },[])
  return (
    <div>
        {products.map((item) => {
            return (
                <Product key={item.id} item={item}/>
            )
        })}
        
    </div>
  )
}

export default Products