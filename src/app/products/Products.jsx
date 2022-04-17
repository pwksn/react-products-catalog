import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../routing/AppRoute.enum';
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
