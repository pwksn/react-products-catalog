import React, { useRef } from 'react';

import { render } from '../../../tests';
import { ProductsList } from './ProductList';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const productsMock = [
	{
		id: 1,
		name: 'Incredible Plastic Pizza',
		description: 'Molestiae iure eum voluptas culpa et ut quasi.',
		rating: 2,
		image: 'https://picsum.photos/640/480?random=1074',
		promo: true,
		active: true,
	},
	{
		id: 2,
		name: 'Licensed Cotton Soap',
		description: 'Commodi repellat illo facilis.',
		rating: 2,
		image: 'https://picsum.photos/640/480?random=5623',
		promo: true,
		active: false,
	},
	{
		id: 3,
		name: 'Tasty Rubber Car',
		description:
			'Explicabo accusamus optio facilis nobis officiis sed nisi omnis quia.',
		rating: 5,
		image: 'https://picsum.photos/640/480?random=2281',
		promo: true,
		active: true,
	},
	{
		id: 4,
		name: 'Generic Metal Shirt',
		description:
			'Molestias atque repudiandae hic consequuntur voluptatem repellat magni.',
		rating: 4,
		image: 'https://picsum.photos/640/480?random=1573',
		promo: false,
		active: false,
	},
	{
		id: 5,
		name: 'Fantastic Fresh Ball',
		description:
			'Aliquam delectus sapiente est cumque odio veniam reiciendis voluptatem distinctio.',
		rating: 1,
		image: 'https://picsum.photos/640/480?random=5147',
		promo: true,
		active: true,
	},
	{
		id: 6,
		name: 'Awesome Fresh Gloves',
		description: 'Ut dicta et minima.',
		rating: 1,
		image: 'https://picsum.photos/640/480?random=7135',
		promo: true,
		active: false,
	},
	{
		id: 7,
		name: 'Unbranded Concrete Sausages',
		description: 'Voluptatibus maxime odit fugit quo qui maxime.',
		rating: 1,
		image: 'https://picsum.photos/640/480?random=2664',
		promo: true,
		active: false,
	},
	{
		id: 8,
		name: 'Small Wooden Gloves',
		description: 'At facere non nisi autem.',
		rating: 1,
		image: 'https://picsum.photos/640/480?random=3559',
		promo: false,
		active: true,
	},
];

describe('ProductList', () => {
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	let store;

	beforeEach(() => {
		const scrollToMock = jest.fn();
		window.HTMLElement.prototype.scrollTo = scrollToMock;
	});

	it('displays product tiles', async () => {
		store = mockStore({
			products: { products: productsMock },
		});

		const { container } = render(
			<Provider store={store}>
				<ProductsList />
			</Provider>
		);

		expect(
			container.getElementsByClassName('product-tile-container').length
		).toBe(8);
	});

	it('displays promo badges', async () => {
		store = mockStore({
			products: { products: productsMock },
		});

		const { getAllByText } = render(
			<Provider store={store}>
				<ProductsList />
			</Provider>
		);

		expect(getAllByText('Promo').length).toBe(6);
	});
});
