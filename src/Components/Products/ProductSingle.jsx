import React from 'react'
import './ProductSingle.css'
import ProductsList from "./ProductsList.js"
import AllCategories from './AllCategories.js'



const ProductSingle = ({prop}) => {

    console.log(prop)

  return (
    
    <div className='main_div_div'>
        {AllCategories.filter(item => item.category === prop).map((item,idx) => {
            return (
              <div >
                
                <div key={idx} className="div">
                <div className="imgsection">
                  <img src={item.imgurl} alt="" />
                </div>
                <br />

                <h5>{item.name}</h5>
                <a href={item.link}>Buy now</a>
                </div>
              </div>
                  
            )
        })}
        
    </div>
  )
}

export default ProductSingle