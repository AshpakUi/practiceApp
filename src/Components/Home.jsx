import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
    const selProd=useSelector((state)=>state.productsReducer.products)
    const selPet=useSelector((state)=>state.productsReducer.mypet)
    return (
        <React.Fragment>
            <h1>{selProd}</h1>
            <h2>{selPet}</h2>
        </React.Fragment>
    );
};

