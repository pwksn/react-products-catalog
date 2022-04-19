import React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import { Icon, Text } from '@chakra-ui/react';
import { IoClipboardOutline } from 'react-icons/io5';
import './ProductList.css';
import ProductDetails from '../ProductDetails/ProductDetails';
import Pagination from '../Pagination/Pagination';
import { useSelector } from 'react-redux';

const ProductsList = () => {
	const productsCount = 8;
	const productDetails = false;
	const products = useSelector((state) => state.products);

	console.log(products);

	return (
		<div className='products-list-container'>
			{products.length ? (
				<>
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
						<Pagination />
					</div>
				</>
			) : (
				<div className='products-empty'>
					<Icon
						color='gray.400'
						as={IoClipboardOutline}
						className='products-empty-icon'
					/>
					<Text fontSize='xl' fontWeight='medium'>
						Ooops... It's empty here
					</Text>
					<Text fontSize='sm' fontWeight='medium' color='gray.500'>
						There are no products on the list
					</Text>
				</div>
			)}
			{productDetails && <ProductDetails />}
		</div>
	);
};

export default ProductsList;
