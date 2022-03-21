import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic

    const addToCart =(id)=>{
        addToDb(id)
    }

    return (
        <div className='product'>
            <h2>Buy This: {name}</h2>
            <p>Only For: {price}</p>
            <p><small>It has id: {id}</small></p>
            <button onClick={()=>addToCart(id)}>Add to cart </button>
        </div>
    );
};

export default Cosmetic