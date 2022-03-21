import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
  {
    "id": "6238a0c77d05655302baa7af",
    "price": 234,
    "name": "Donaldson Bradshaw"
  },
  {
    "id": "6238a0c7b2a6d6be65b695f3",
    "price": 290,
    "name": "Luann Skinner"
  },
  {
    "id": "6238a0c7e739e38e0a45bad0",
    "price": 206,
    "name": "Michael Justice"
  },
  {
    "id": "6238a0c76c466155c96f984b",
    "price": 227,
    "name": "Arnold Jenkins"
  },
  {
    "id": "6238a0c7603e734b2686f51f",
    "price": 312,
    "name": "Wallace Mullen"
  },
  {
    "id": "6238a0c716dce425d94d2643",
    "price": 368,
    "name": "Dorthy Hartman"
  },
  {
    "id": "6238a0c7808fa4bba7bcaede",
    "price": 217,
    "name": "Branch Short"
  }
]

    return (
        <div>
            <h1>Welcome to my cosmetics store!</h1>
            {
                cosmetics.map(cosmetic=><Cosmetic
                    key={cosmetics.id}
                    cosmetic = {cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics; 