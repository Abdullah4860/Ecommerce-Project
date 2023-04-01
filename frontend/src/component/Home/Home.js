import React, { Fragment, useEffect } from 'react'
import "./Home.css"
import Product from "./Product.js"
import MetaData from '../layout/MetaData'
import { getProduct } from '../../actions/productAction'
import {useSelector,useDispatch} from "react-redux"




const Home = () => {
  const dispatch=useDispatch();
  const {  products } = useSelector((state) => state.products);

useEffect(()=>{

  dispatch(getProduct());
},[dispatch]);

  return (
   <Fragment>

    <MetaData title="Ecommerce Project"/> 

  <div className="banner">
    <p>Welcome to the Store</p>
    <h1>You Can Find Amazing Products Here</h1>
    <a href="#container">
        <button>Scroll </button> 
    </a>
  </div>

  <h2 className="homeHeading">Featured Products</h2>

  <div className="container" id='container'>


  {products && products.map(product => (
            <Product  product={product} />
    ))}


  </div>

   </Fragment>
  )
}

export default Home
