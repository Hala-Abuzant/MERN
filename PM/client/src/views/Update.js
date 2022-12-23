import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';


const Update = (props) => {

    const { id } = props;//we insert it through path as a prop
    const [product, setProduct] = useState({});//
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {

                console.log("inside get of get of edit");

                setProduct(res.data);

                console.log(res);

                setLoaded(true);
            })
            .catch(err=>console.log(err));
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => {console.log(res)
                console.log("inside update component")
            }
            
            );
    }// why i didnt put it inside form
    // because each time in update or create i need to send the function as prop with same name 

    
    return (
        <div>
            {loaded && (
                
    <ProductForm
        onSubmitProp={updateProduct}

        //  {/* lift the function  as a prop to use it in form */}

        initialTitle={product.title}//initial value is not "" 
        initialPrice={product.price}
        initialDescription={product.description}
    />
    
)}
        <DeleteButton  productId={product._id} successCallback={() =>navigate("/")}/>
        </div>
    )
}
    
export default Update;

