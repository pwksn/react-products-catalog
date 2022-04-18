import React from 'react';
import './ProductTile.css';
import { Text, Button, Icon } from '@chakra-ui/react';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const ProductTile = () => {
	const isAvailable = true;
	const isPromo = false;

	return (
		<div className='product-tile-container'>
			{isPromo && <div className='product-promo-badge'>Promo</div>}
			<img
				src='https://www.mobimaniak.pl/wp-content/uploads/gsmmaniak/2020/03/xbox-series-x-3.jpg'
				alt='Logo'
			/>
			<div className='product-tile-content'>
				<div>
					<Text fontSize='xl' fontWeight='medium'>
						Product Name
					</Text>
					<Text
						className='product-description'
						fontSize='sm'
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
				<div>
					<div className='product-rating'>
						<Icon color='orange.500' as={IoStar} />
						<Icon color='orange.500' as={IoStar} />
						<Icon color='orange.500' as={IoStar} />
						<Icon color='orange.500' as={IoStar} />
						<Icon color='gray.500' as={IoStarOutline} />
					</div>
					{isAvailable ? (
						<Button
							isFullWidth
							colorScheme='brand'
							fontWeight={400}
						>
							Show details
						</Button>
					) : (
						<Button
							isDisabled
							isFullWidth
							colorScheme='gray'
							fontWeight={400}
						>
							Unavailable
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductTile;
