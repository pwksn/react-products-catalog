import React from 'react';
import { Text, Button, Icon } from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';
import './ProductDetails.css';

const ProductDetails = () => {
	return (
		<div className='product-details-container'>
			<div className='product-details-content'>
				<Icon as={IoClose} className='products-details-close' />
				<img
					src='https://www.mobimaniak.pl/wp-content/uploads/gsmmaniak/2020/03/xbox-series-x-3.jpg'
					alt='Logo'
				/>
				<div className='product-details-info'>
					<Text fontSize='xl' fontWeight='medium'>
						Product Name
					</Text>
					<Text
						className='product-details-desc'
						fontSize='ml'
						fontWeight='medium'
						color='gray.500'
					>
						The Alsos Mission was an Allied unit formed to
						investigate Axis scientific developments, especially
						nuclear, chemical and biological weapons, as part of the
						Manhattan Project during World War II. Colonel Boris
						Pash, a former Manhattan P
					</Text>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
