import React from 'react';
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
	PopoverCloseButton,
	PopoverArrow,
	PopoverHeader,
} from '@chakra-ui/react';
import { IoSearchSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const isLoggedIn = true;

	return (
		<div className='navbar-container'>
			<div className='logo'>
				<Text fontSize='xl' fontWeight='bold'>
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
				/>
				<InputRightElement
					pointerEvents='none'
					children={<Icon color='gray.700' as={IoSearchSharp} />}
				/>
			</InputGroup>
			<div className='checkbox'>
				<Checkbox colorScheme='brand'>Active</Checkbox>
				<Checkbox colorScheme='brand'>Promo</Checkbox>
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
								<Button variant='ghost'>Logout</Button>
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
