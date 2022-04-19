import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	Text,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	InputGroup,
	InputRightElement,
	Button,
} from '@chakra-ui/react';

import { AppRoute } from '../../routing/AppRoute.enum';
import './Login.css';
import loginPhoto from '../../images/login-photo.jpg';

export const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(false);

	const history = useHistory();

	const handleClick = () => setShow((show) => !show);

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = username;
		localStorage.setItem('user', user);
		history.push('/');
	};

	return (
		<div className='login-container'>
			<img className='login-image' src={loginPhoto} alt='Login image' />
			<div className='login-content'>
				<Text className='login-logo' fontSize='xl' fontWeight='medium'>
					join.tsh.io
				</Text>
				<div className='login-form' onSubmit={handleSubmit}>
					<Text
						fontSize='3xl'
						fontWeight='medium'
						className='login-text'
					>
						Login
					</Text>
					<form>
						<FormControl isRequired className='login-form-control'>
							<FormLabel htmlFor='first-name'>Username</FormLabel>
							<Input
								id='first-name'
								placeholder='Enter username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</FormControl>
						<FormControl isRequired className='login-form-control'>
							<FormLabel htmlFor='first-name'>Password</FormLabel>
							<InputGroup size='md'>
								<Input
									pr='4.5rem'
									type={show ? 'text' : 'password'}
									placeholder='Enter password'
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<InputRightElement width='4.5rem'>
									<Button
										h='1.75rem'
										size='sm'
										onClick={handleClick}
									>
										{show ? 'Hide' : 'Show'}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Button
							isFullWidth
							colorScheme='brand'
							className='login-button'
							type='submit'
						>
							Log in
						</Button>
						<Button
							colorScheme='gray'
							variant='link'
							fontWeight='normal'
						>
							Forgot password?
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};
