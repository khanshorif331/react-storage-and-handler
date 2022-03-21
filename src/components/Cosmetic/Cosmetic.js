import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic

    const addToCart =(id)=>{
        console.log('item added',id);
    }

    const addToCartWithParam = () =>addToCart(id)

    return (
        <div className='product'>
            <h2>Buy This: {name}</h2>
            <p>Only For: {price}</p>
            <p><small>It has id: {id}</small></p>
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={()=>addToCart(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic