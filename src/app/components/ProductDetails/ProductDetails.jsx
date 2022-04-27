import React from 'react';
import { Text, Icon } from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';
import './ProductDetails.css';

const ProductDetails = ({ product, handleClose }) => {
	return (
		<div className='product-details-container' onClick={handleClose}>
			<div
				className='product-details-content'
				onClick={(e) => e.stopPropagation()}
			>
				<Icon
					as={IoClose}
					className='products-details-close'
					onClick={handleClose}
				/>
				<img src={product.image} alt={product.name} />
				<div className='product-details-info'>
					<Text fontSize='xl' fontWeight='medium'>
						{product.name}
					</Text>
					<Text
						className='product-details-desc'
						fontSize='ml'
						fontWeight='medium'
						color='gray.500'
					>
						{product.description}
					</Text>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
