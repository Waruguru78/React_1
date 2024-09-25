import React from 'react';
import product from '../product';

const Name = () => {
    return (
        <div>
            <h2 className="card-title">{product.name}</h2>
        </div>
    );
}

export default Name;