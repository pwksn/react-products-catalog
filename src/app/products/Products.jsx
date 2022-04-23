import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { getProducts } from '../../actions/products';

import { AppRoute } from '../../routing/AppRoute.enum';
import Navbar from '../components/Navbar/Navbar';
import ProductsList from '../components/ProductsList/ProductList';
import './Products.css';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const Products = () => {
	const dispatch = useDispatch();
	const query = useQuery();
	const history = useHistory();
	const page = query.get('page') || 1;
	const searchQuery = query.get('searchQuery');

	// useEffect(() => {
	// 	dispatch(getProducts());
	// }, [dispatch]);

	return (
		<div className='products-container'>
			<Navbar />
			<ProductsList />
		</div>
	);
};
