import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../actions/products';

import { AppRoute } from '../../routing/AppRoute.enum';
import Navbar from '../components/Navbar/Navbar';
import ProductsList from '../components/ProductsList/ProductList';
import './Products.css';

export const Products = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className='products-container'>
			<Navbar />
			<ProductsList />
		</div>
	);
};
