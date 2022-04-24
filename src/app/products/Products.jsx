import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductsList from '../components/ProductsList/ProductList';
import './Products.css';

export const Products = () => {
	return (
		<div className='products-container'>
			<Navbar />
			<ProductsList />
		</div>
	);
};
