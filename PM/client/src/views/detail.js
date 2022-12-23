import React, { useEffect, useState } from 'react'
import axios from 'axios';


    
const Detail = (props) => {

    const [product, setProduct] = useState({})
 
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +props.id)
            .then(res => {setProduct(res.data)
                console.log("i got the object")
            })
            .catch(err => console.error(err));
        
            })
            
 
    
    return (
        <div>
            <h1>Product</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
    
export default Detail;

