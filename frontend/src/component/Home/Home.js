import React, { Fragment, useEffect } from 'react'
import "./Home.css"
import Product from "./ProductCard.js"
import MetaData from '../layout/MetaData'
import { clearErrors, getProduct } from '../../actions/productAction'
import {useSelector,useDispatch} from "react-redux"
import { useAlert } from 'react-alert'




const Home = () => {

  const alert=useAlert();
  const dispatch=useDispatch();
  const { error, products } = useSelector((state) => state.products);

useEffect(()=>{
  if (error){
     alert.error(error)
     dispatch(clearErrors())
  }
  dispatch(getProduct());
},[dispatch,error,alert]);

  return (
   <Fragment>

    <MetaData title="Ecommerce Project"/> +

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
