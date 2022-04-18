import React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import { Icon, Text } from '@chakra-ui/react';
import { IoClipboardOutline } from 'react-icons/io5';
import './ProductList.css';

const ProductsList = () => {
	const productsCount = 8;

	return (
		<div className='products-list-container'>
			{productsCount ? (
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
						<span>1 2 3</span>
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
		</div>
	);
};

export default ProductsList;
