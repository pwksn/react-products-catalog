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

const Navbar = () => {
	const isLoggedIn = localStorage.getItem('user');
	const [search, setSearch] = useState('');
	const [filters, setFilters] = useState({
		isPromoChecked: false,
		isActiveChecked: false,
	});

	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		searchProducts();
	}, [filters]);

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
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
					filters.isActiveChecked ? filters.isActiveChecked : null
				)
			);
		} else if (
			(!search.trim() && filters.isPromoChecked) ||
			filters.isActiveChecked
		) {
			dispatch(
				getProductsByFilters(
					filters.isPromoChecked ? filters.isPromoChecked : null,
					filters.isActiveChecked ? filters.isActiveChecked : null
				)
			);
		} else if (search.trim()) {
			dispatch(getProductsBySearch(search));
		} else {
			dispatch(getProducts());
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('user');
		history.push('/login');
	};

	return (
		<div className='navbar-container'>
			<div className='logo'>
				<Text fontSize='xl' fontWeight='medium'>
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
								name='Dan Abrahmov'
								src='https://bit.ly/dan-abramov'
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
