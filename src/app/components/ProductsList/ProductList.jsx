import React, { createRef, useEffect, useState } from 'react';
import ProductTile from '../ProductTile/ProductTile';
import { Icon, list, Text } from '@chakra-ui/react';
import { IoClipboardOutline } from 'react-icons/io5';
import './ProductList.css';
import ProductDetails from '../ProductDetails/ProductDetails';
import Pagination from '../Pagination/Pagination';
import { useQuery } from '../../../hooks/useQuery';
import { useSelector } from 'react-redux';

const ProductsList = () => {
	const productsCount = 8;
	const { products } = useSelector((state) => state.products);
	const query = useQuery();
	const page = Number(query.get('page') || 1);
	const [productDetails, setProductDetails] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});
	const listRef = createRef();

	useEffect(() => {
		if (products) {
			listRef.current.scrollTo(0, 0);
		}
	}, [products]);

	const showProductDetails = (name, description, image) => {
		setSelectedProduct({ name, description, image });
		setProductDetails(true);
	};

	return (
		<div className='products-list-container'>
			{products?.length ? (
				<>
					<div className='products-tiles' ref={listRef}>
						{products.map((product) => (
							<ProductTile
								key={product.id}
								name={product.name}
								description={product.description}
								rating={product.rating}
								image={product.image}
								isPromo={product.promo}
								isActive={product.active}
								showProductDetails={showProductDetails}
							/>
						))}
					</div>
					<div className='products-pagination'>
						<Pagination currentPage={page} />
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
			{productDetails && (
				<ProductDetails
					product={selectedProduct}
					handleClose={() => setProductDetails(false)}
				/>
			)}
		</div>
	);
};

export default ProductsList;
