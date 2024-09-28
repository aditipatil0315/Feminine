import React from 'react'
import Maternity from './Maternity.js'
import Periods from './Periods.js'
import ProductsList from "./ProductsList.js"
import AllCategories from './AllCategories.js'



const ProductSingle = ({prop}) => {

    console.log(prop)

  return (
    
    <div>
        {AllCategories.filter(item => item.category === prop).map((item,idx) => {
            return (
                <div key={idx} className="div">

                <h1>{item.name}</h1>
                <a href={item.link}>link</a>
                </div>
            )
        })}
        
    </div>
  )
}

export default ProductSingle