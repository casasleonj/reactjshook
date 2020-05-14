import React from 'react'
import './trolley.css'
import Product from './Product'

const Trolley  = ({trolley, addProduct}) => (
  <div className='trolley'>
    <h2>Tu carrito de compras</h2>
      {trolley.length === 0
      ?
        <p>No hay elementos en el carrito</p>
      : 
      trolley.map(product => (
        <Product 
          key={product.id}
          product={product}
          trolley={trolley}
          addProduct = {addProduct}
        />
      ))
      }
  </div>
)
 
export default Trolley;