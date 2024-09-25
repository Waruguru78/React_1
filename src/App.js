import React from 'react';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const App = () => {
    const firstName = "Lizzie"; 

    return (
        <div className="app">
            <div className="card">
                <h1>Product Details</h1>
                <Name />
                <Price />
                <Description />
                <Image />
            </div>
            {firstName ? (
                <div className="greeting">
                    <p>Hello, {firstName}!</p>
                </div>
            ) : (
                <div className="greeting">
                    <p>Hello, there!</p>
                </div>
            )}
        </div>
    );
};

export default App;
