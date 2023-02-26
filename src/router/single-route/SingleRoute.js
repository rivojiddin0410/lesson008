import React from 'react'
import { useParams } from "react-router-dom"
import { PRODUCTS } from '../../static/static';
function SingleRoute() {
    const param = useParams()
    const oneItem = PRODUCTS.find(i => i.id === param.id)
    console.log(oneItem);
  return (
    <div>
        <h2>Single Route</h2>
        <img src={oneItem?.rasm} width="400" alt="" />
        <h2>{oneItem?.nomi}</h2>
        <h2>{oneItem?.narx} USD</h2>
    </div>
  )
}

export default SingleRoute