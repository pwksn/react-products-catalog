import React, { useEffect, useState } from 'react';
import './ProductTile.css';
import { Text, Button, Icon } from '@chakra-ui/react';
import { IoStar, IoStarOutline } from 'react-icons/io5';

const ProductTile = ({
	name,
	description,
	rating,
	image,
	isPromo,
	isActive,
	showProductDetails,
}) => {
	const [ratingStars, setRatingStars] = useState([]);

	useEffect(() => {
		prepareRatingStars();
	}, [rating]);

	const prepareRatingStars = () => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<Icon color='orange.500' as={IoStar} key={i} />);
			} else {
				stars.push(
					<Icon color='gray.500' as={IoStarOutline} key={i} />
				);
			}
		}
		setRatingStars(stars);
	};

	return (
		<div className='product-tile-container'>
			{isPromo && <div className='product-promo-badge'>Promo</div>}
			<img src={image} alt='Logo' />
			<div className='product-tile-content'>
				<div>
					<Text fontSize='xl' fontWeight='medium'>
						{name}
					</Text>
					<Text
						className='product-description'
						fontSize='sm'
						fontWeight='medium'
						color='gray.500'
					>
						{description}
					</Text>
				</div>
				<div>
					<div className='product-rating'>{ratingStars}</div>
					{isActive ? (
						<Button
							isFullWidth
							colorScheme='brand'
							fontWeight={400}
							onClick={() =>
								showProductDetails(name, description, image)
							}
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
