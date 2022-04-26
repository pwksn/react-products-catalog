import React from 'react';

import { render } from '../../../tests';
import { Navbar } from './Navbar';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

describe('Navbar', () => {
	const initialState = { products: [] };
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	let store;

	it('displays all information', async () => {
		store = mockStore(initialState);
		const { getAllByRole, getByPlaceholderText } = render(
			<Provider store={store}>
				<Navbar />
			</Provider>
		);

		expect(getByPlaceholderText('Search')).toBeInTheDocument();
		const checkboxes = getAllByRole('checkbox');
		expect(checkboxes).toHaveLength(2);
	});

	it('displays log in button when user not logged in', async () => {
		const { getAllByRole, getByText } = render(
			<Provider store={store}>
				<Navbar />
			</Provider>
		);

		const loginButtonEl = getByText(/log in/i);
		const checkboxes = getAllByRole('checkbox');
		expect(checkboxes).toHaveLength(2);
		expect(loginButtonEl).toBeInTheDocument();
	});

	it('displays avatar when user logged in', async () => {
		const spyGetItem = jest
			.spyOn(Storage.prototype, 'getItem')
			.mockImplementation(() => 'test123');
		const { getAllByRole, getByRole } = render(
			<Provider store={store}>
				<Navbar />
			</Provider>
		);

		const avatarEl = getByRole('img');
		const checkboxes = getAllByRole('checkbox');
		expect(spyGetItem).toHaveBeenCalled();
		expect(checkboxes).toHaveLength(2);
		expect(avatarEl).toBeInTheDocument();
	});
});
