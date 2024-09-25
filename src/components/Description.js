import React from 'react';
import product from '../product';

const Description = () => {  
    return (
        <div>
            <p className="card-text">{product.description}</p>
        </div>
    );
 }

 export default Description;