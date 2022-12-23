import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';



const Main = () => {

    const [Products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    const removeFromDom = personId => {
        setProducts(Products.filter(person => person._id != personId));
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);///here
                setLoaded(true);
             
        
            })
            .catch(err => console.error(err));
    },[]);//for getting list of people

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res=>{
                setProducts([...Products, res.data]);
            
            })
    }
    
    return (
        <div>


        <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
           {/* lift the function as a prop */}
        
        <hr/>
           
           {loaded && <ProductsList products={Products} removeFromDom={removeFromDom} />}
           
    
        </div>
    )
}
    
export default Main;

