import React from 'react';
import { add, multiply ,divide } from '../../utilities/calculate';

const Shoes = () => {
    const first =80
    const second = 16
    const result = multiply(first,second)
    const sum =add(first,second)
    const division = divide(first,second)
    return (
        <div>
            <h3>This is shoes compo.</h3>
            <p>Result: {result} and Total: {sum}</p>
            <p>Division Result: {division}</p>
        </div>
    );
};

export default Shoes;