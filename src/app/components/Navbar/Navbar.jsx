import React, { useState, useEffect } from 'react';
import {
	Text,
	Avatar,
	Button,
	InputGroup,
	InputRightElement,
	Input,
	Icon,
	Checkbox,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
} from '@chakra-ui/react';
import { IoSearchSharp } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import {
	getProducts,
	getProductsBySearch,
	getProductsByFilters,
	getProductsBySearchAndFilters,
} from '../../../actions/products';
import './Navbar.css';
import { useDispatch } from 'react-redux';
import { useQuery } from '../../../hooks/useQuery';

const Navbar = () => {
	const isLoggedIn = localStorage.getItem('user');
	const [search, setSearch] = useState('');
	const [filters, setFilters] = useState({
		isPromoChecked: false,
		isActiveChecked: false,
	});
	const query = useQuery();
	const page = Number(query.get('page') || 1);

	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		searchProducts();
	}, [filters, page]);

	useEffect(() => {
		history.push('/products');
	}, [filters]);

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			history.push('/products');
			searchProducts();
		}
	};

	const searchProducts = () => {
		if (
			search.trim() &&
			(filters.isPromoChecked || filters.isActiveChecked)
		) {
			dispatch(
				getProductsBySearchAndFilters(
					search,
					filters.isPromoChecked ? filters.isPromoChecked : null,
					filters.isActiveChecked ? filters.isActiveChecked : null,
					page
				)
			);
		} else if (
			(!search.trim() && filters.isPromoChecked) ||
			filters.isActiveChecked
		) {
			dispatch(
				getProductsByFilters(
					filters.isPromoChecked ? filters.isPromoChecked : null,
					filters.isActiveChecked ? filters.isActiveChecked : null,
					page
				)
			);
		} else if (search.trim()) {
			dispatch(getProductsBySearch(search, page));
		} else {
			dispatch(getProducts(page));
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('user');
		history.push('/login');
	};

	return (
		<div className='navbar-container'>
			<div className='logo'>
				<Text fontSize='xl' fontWeight='medium' as={Link} to={'/'}>
					join.tsh.io
				</Text>
			</div>
			<InputGroup className='search-input'>
				<Input
					placeholder='Search'
					_placeholder={{
						color: 'inherit',
						fontWeight: 'medium',
					}}
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					onKeyDown={handleKeyDown}
				/>
				<InputRightElement
					pointerEvents='none'
					children={<Icon color='gray.700' as={IoSearchSharp} />}
				/>
			</InputGroup>
			<div className='checkbox'>
				<Checkbox
					colorScheme='brand'
					onChange={(e) =>
						setFilters((state) => ({
							...state,
							isActiveChecked: e.target.checked,
						}))
					}
				>
					Active
				</Checkbox>
				<Checkbox
					colorScheme='brand'
					onChange={(e) =>
						setFilters((state) => ({
							...state,
							isPromoChecked: e.target.checked,
						}))
					}
				>
					Promo
				</Checkbox>
			</div>

			<div className='navbar-left'>
				{isLoggedIn ? (
					<Popover arrowSize={1} placement='bottom-start'>
						<PopoverTrigger>
							<Avatar
								name='Paweł Kopciara'
								src='https://media-exp1.licdn.com/dms/image/C4D03AQHXdgu9EXPOEQ/profile-displayphoto-shrink_200_200/0/1603644326783?e=2147483647&v=beta&t=NjniNf8sikO0KZEBSFfDK90aW5GVySG95D09n8vQlM4'
							/>
						</PopoverTrigger>
						<PopoverContent className='logout-button'>
							<PopoverArrow />
							<PopoverBody>
								<Button variant='ghost' onClick={handleLogout}>
									Logout
								</Button>
							</PopoverBody>
						</PopoverContent>
					</Popover>
				) : (
					<Button
						colorScheme='brand'
						variant='outline'
						as={Link}
						to='/login'
					>
						Log in
					</Button>
				)}
			</div>
		</div>
		// <div className="navbar-container">
		// 	<div className="navbar-left">
		// 		<div className="logo">
		// 			<Text fontSize="xl" fontWeight="bold">
		// 				join.tsh.io
		// 			</Text>
		// 		</div>
		// 		<div className="filters">
		// 	<InputGroup>
		// 		<Input
		// 			placeholder="Search"
		// 			_placeholder={{
		// 				color: 'inherit',
		// 				fontWeight: 'medium',
		// 			}}
		// 		/>
		// 		<InputRightElement
		// 			pointerEvents="none"
		// 			children={
		// 				<Icon color="gray.700" as={IoSearchSharp} />
		// 			}
		// 		/>
		// 	</InputGroup>
		// 	<Checkbox colorScheme="brand">Active</Checkbox>
		// 	<Checkbox colorScheme="brand">Promo</Checkbox>
		// </div>
		// 	</div>
		// <div>
		// 	{isLoggedIn ? (
		// 		<Avatar
		// 			name="Dan Abrahmov"
		// 			src="https://bit.ly/dan-abramov"
		// 		/>
		// 	) : (
		// 		<Button
		// 			colorScheme="brand"
		// 			variant="outline"
		// 			as={Link}
		// 			to="/login"
		// 		>
		// 			Log in
		// 		</Button>
		// 	)}
		// </div>
		// </div>
	);
};

export default Navbar;
