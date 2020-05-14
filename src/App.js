import React, { Fragment, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Trolley from './components/Trolley'

function App() {
// Obtener año actual
  const fecha = new Date().getFullYear();
// state Obtener listado de clientes
//estados, const [state, funcion que cambia el estado] = useState(valor inicial)
  const [ products ] = useState([
    { id: 1, name:'React js', price: 10 },
    { id: 2, name:'Vue js', price: 20 },
    { id: 3, name:'Angular js', price: 30 },
    { id: 4, name:'Js', price: 40 }
  ]);
  //state para carrito de compras
  const [ trolley, addProduct ] = useState([])

  //iterando sobre productos
  const listProducts = products.map( product => (
    <Product 
      key = {product.id}
      product = {product}
      products = {products}
      trolley = {trolley}
      addProduct = {addProduct}
    />
  ));
  //------------------------------
  return (
    <Fragment>

      <Header 
        titulo = 'Tienda virtual' 
      />
        <h2> Lista de productos </h2>
          {listProducts}
        <Trolley 
        trolley = {trolley}
        addProduct = {addProduct}
        />
      <Footer
        fecha = {fecha}
      />

    </Fragment>
  );
}
export default App;