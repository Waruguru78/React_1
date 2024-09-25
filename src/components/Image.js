import React from 'react';
import product from '../product';

const Image = () => {  
    return (
        <div>
            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
        </div>
    );
 }

 export default Image;