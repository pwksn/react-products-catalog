import React from 'react';

import { render } from '../../../tests';
import { Pagination } from './Pagination';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

describe('Pagination', () => {
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	let store;

	it('displays 8 pagination elements when number of pages > 6', async () => {
		store = mockStore({ products: { totalPages: 10 } });
		const { getAllByRole } = render(
			<Provider store={store}>
				<Pagination currentPage={2} />
			</Provider>
		);

		const paginationEls = getAllByRole('link');
		expect(paginationEls).toHaveLength(8);
	});

	it('displays 3 pagination elements when number of pages = 1', async () => {
		store = mockStore({ products: { totalPages: 1 } });
		const { getAllByRole } = render(
			<Provider store={store}>
				<Pagination currentPage={1} />
			</Provider>
		);

		const paginationEls = getAllByRole('link');
		expect(paginationEls).toHaveLength(3);
	});

	it('disables "First" page button when user at first page ', async () => {
		store = mockStore({ products: { totalPages: 1 } });
		const { getAllByRole } = render(
			<Provider store={store}>
				<Pagination currentPage={1} />
			</Provider>
		);

		const paginationFirstEl = getAllByRole('link')[0];
		expect(paginationFirstEl).toHaveAttribute('disabled');
	});
});
