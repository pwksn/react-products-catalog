import axios from 'axios';

const productsURL = 'https://join-tsh-api-staging.herokuapp.com/products';

export const fetchProducts = (page) =>
	axios.get(productsURL, {
		params: {
			page: page,
			limit: 8,
		},
	});

export const fetchProductsBySearch = (searchQuery) =>
	axios.get(productsURL, { params: { search: searchQuery } });

export const fetchProductsByFilters = (promo, active) =>
	axios.get(productsURL, {
		params: { promo: promo ?? null, active: active ?? null },
	});

export const fetchProductsBySearchAndFilters = (search, promo, active) =>
	axios.get(productsURL, {
		params: {
			search: search,
			promo: promo ?? null,
			active: active ?? null,
		},
	});
