import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

    
const ProductsList = (props) => {

    const { removeFromDom } = props;
    
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    
                    <Link to={"/" + product._id}>
                        {product.title} 
                    </Link>
                    |
                    
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>

                </p>
            })}
        </div>
    )
}
    
export default ProductsList;