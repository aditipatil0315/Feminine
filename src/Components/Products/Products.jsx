import productsArray from "./Products"
import './Products.css'

const Products = () => {
  return (
      <div className="products_container">

                <h3>Select the category of the products below -</h3> <br /><br />
        < div className="product_cards">

          {productsArray.map((item, idx) => (
            <div key={idx} className="product">

            <h3 >{item.productName}</h3>
            <img src= {item.imgURL}  />
            
            </div>
          ))}
          
          
        </div>

      </div>
  )
}

export default Products