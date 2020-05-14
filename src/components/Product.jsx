import React from 'react';

const Product = ({ product, trolley, addProduct, products }) => {
  const {id, name, price} = product
  //add product to trolley
  const selectProduct = id => {
    const product = products.filter(product => product.id === id)[0];
      addProduct([
        ...trolley,
        product
      ])
  };
  const deleteProduct = id => {
    const products = trolley.filter(product => product.id !== id);
    addProduct(products)
  }

  return ( 
    <div>
      <h3>{name}</h3>
      <h6>$ {price}</h6>
      
      { products
        ?
          (
            <button 
              type="button"
              onClick = { () => selectProduct(id) }
             >Comprar
            </button>
          )
        :
          (
            <button       
              type="button"
              onClick= { () => deleteProduct(id) }
            >Eliminar
            </button>
          )
      }
    </div>
    
  );
} 
export default Product;