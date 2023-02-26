import React from 'react'
import "./Products.css"
import { PRODUCTS } from "../../static/static"
import { Link } from 'react-router-dom';
function Products() {

  return (
    <div>
        <h2>Products</h2>
        <div className="pro__container">
          {
            PRODUCTS?.map((item, inx)=><div key={inx} className="pro__card">
              <Link to={`/product/${item.id}`}>

              <img src={item.rasm} alt="" />
              </Link>
            <h2>{item.nomi}</h2>
            <h4>{Math.round(item.narx * 1.5 / 12) } USD / 12 oyga</h4>
            <del>{item.narx * 1.2} USD</del>
            <h3>{item.narx} USD</h3>
            <button>Add to Cart</button>
          </div>)
          }
        </div>
    </div>
  )
}

export default Products