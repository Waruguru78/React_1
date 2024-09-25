import React from 'react';
import product from '../product';

const Price = () => {  
    return (
        <div>
            <p className="card-text"><strong>Price: </strong>{product.price}</p>
        </div>
    );
 }

 export default Price;