import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../tests';

import { Login } from './Login';

describe('Login', () => {
	it('displays all information', async () => {
		const { getByText, getByRole, getByPlaceholderText } = render(
			<Login />
		);

		expect(getByText('Login')).toBeInTheDocument();
		expect(getByPlaceholderText('Enter username')).toBeInTheDocument();
		expect(getByPlaceholderText('Enter password')).toBeInTheDocument();
		expect(getByRole('button', { name: /log in/i })).toBeInTheDocument();
	});

	it('disable login button when no password entered', async () => {
		const { getByRole, getByPlaceholderText } = render(<Login />);

		const usernameInputEl = getByPlaceholderText('Enter username');
		const loginButtonEl = getByRole('button', { name: /log in/i });
		fireEvent.change(usernameInputEl, { target: { value: 'test' } });
		expect(loginButtonEl).toHaveAttribute('disabled');
	});

	it('enable login button when credentials entered', async () => {
		const { getByRole, getByPlaceholderText } = render(<Login />);

		const usernameInputEl = getByPlaceholderText('Enter username');
		const passwordInputEl = getByPlaceholderText('Enter password');
		const loginButtonEl = getByRole('button', { name: /log in/i });
		fireEvent.change(usernameInputEl, { target: { value: 'test' } });
		fireEvent.change(passwordInputEl, { target: { value: 'test' } });
		expect(loginButtonEl).not.toHaveAttribute('disabled');
	});

	it('logs in user', async () => {
		const { getByRole, getByPlaceholderText } = render(<Login />);

		const spySetItem = jest.spyOn(Storage.prototype, 'setItem');
		const usernameInputEl = getByPlaceholderText('Enter username');
		const passwordInputEl = getByPlaceholderText('Enter password');
		const loginButtonEl = getByRole('button', { name: /log in/i });
		fireEvent.change(usernameInputEl, { target: { value: 'test' } });
		fireEvent.change(passwordInputEl, { target: { value: 'test' } });
		fireEvent.click(loginButtonEl);
		expect(spySetItem).toHaveBeenCalled();
	});
});
