import React, { Fragment, useEffect, useState } from 'react'
import "./Products.css"
import { clearErrors, getProduct} from '../../actions/productAction'
import { useSelector, useDispatch } from "react-redux"
import ProductCard from '../Home/ProductCard'
import Pagination from '@mui/material/Pagination';
import {useAlert} from'react-alert'
import Typography from '@mui/material/Typography';


const categories = [
  "laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = () => {

    const dispatch=useDispatch()

    const alert=useAlert();

    const [currentPage,setCurrentPage]=useState(1);
    const [category, setCategory] = useState("");

    const {products,productsCount,resultPerPage,error} =useSelector(state=>state.products)

    const setCurrentPageNo=(e,value)=>{
              setCurrentPage(value)
    }
    useEffect(() => { 
      if(error){
        alert.error(error)
        dispatch(clearErrors())
      }
      
        dispatch(getProduct(currentPage,category))
    }, [dispatch,currentPage,category,alert,error])
  return (
    <Fragment>
<h2 className='productsHeading'>Products</h2>

<div className="products">
    {products &&
      products.map((product)=>(
        <ProductCard key={product._id} product={product}/>
      ))
    }
</div>


            
           
<div className="filterBox">
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            </div>
           

<div className='paginationBox'><Pagination count={productsCount%resultPerPage} shape="rounded" 

     page={currentPage}
     onChange={setCurrentPageNo}
     
    
/></div>
    </Fragment>
  )
}

export default Products
