
import './App.css';
import Header from "./component/layout/Header/Header.js"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import WebFont from "webfontloader"
import React from "react"
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import LoginSignup from './component/User/LoginSignup';
import ProductDetails from './component/Product/ProductDetails.js';
import Products from "./component/Product/Products.js"



function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans", "Chilanka"]
      }
    })
  },[])

  return(
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' Component={Home} />
        <Route  path='/product/:id' Component={ProductDetails} />
        <Route  path='/products' Component={Products} />
        <Route  path='/login' Component={LoginSignup}/>
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
 