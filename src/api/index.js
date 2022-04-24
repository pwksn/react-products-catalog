import axios from 'axios';

const productsURL = 'https://join-tsh-api-staging.herokuapp.com/products';

export const fetchProducts = (page) =>
	axios.get(productsURL, {
		params: {
			page: page,
			limit: 8,
		},
	});

export const fetchProductsBySearch = (searchQuery, page) =>
	axios.get(productsURL, {
		params: { search: searchQuery, page: page, limit: 8 },
	});

export const fetchProductsByFilters = (promo, active, page) =>
	axios.get(productsURL, {
		params: {
			promo: promo ?? null,
			active: active ?? null,
			page: page,
			limit: 8,
		},
	});

export const fetchProductsBySearchAndFilters = (search, promo, active, page) =>
	axios.get(productsURL, {
		params: {
			search: search,
			promo: promo ?? null,
			active: active ?? null,
			page: page,
			limit: 8,
		},
	});
