import { useState } from 'react';
import './Products.css'
import ProductsList from "./ProductsList.js"
import { useNavigate } from 'react-router-dom'
import ProductSingle from './ProductSingle.jsx';


const Products = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");

  // useEffect(() => {
    
  // }, [third])
  // console.log(name)


  return (
      <div className="products_container">

        <h3>Select the category of the products below -</h3> <br /><br />
        < div className="product_cards" >

          {ProductsList.map((item, idx) => (
            <div key={idx} className="product" onClick={() => setName(item.category)}>
              

            <h3 >{item.productName}</h3>
            <img src= {item.imgURL}  />
            
            </div>
          ))}
          
          
        </div>
        <ProductSingle prop={name}  />
        {/* <button onClick={() => setName("maternity")}>maternity</button> */}
        {/* <button onClick={() => setName("periods")}>periods</button> */}
      

      </div>
  )
}

export default Products