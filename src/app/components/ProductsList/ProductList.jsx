import React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import './ProductList.css';

const ProductsList = () => {
	return (
		<div className='products-list-container'>
			<div className='products-tiles'>
				<ProductTile />
				<ProductTile />
				<ProductTile />
				<ProductTile />
				<ProductTile />
				<ProductTile />
				<ProductTile />
				<ProductTile />
			</div>
			<div className='products-pagination'>
				<span>1 2 3</span>
			</div>
		</div>
	);
};

export default ProductsList;
