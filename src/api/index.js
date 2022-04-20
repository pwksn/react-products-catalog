import axios from 'axios';

const productsURL = 'https://join-tsh-api-staging.herokuapp.com/products';

export const fetchProducts = (search, promo, active) =>
	axios.get(productsURL, {
		params: {
			search: search ?? null,
			promo: promo ?? null,
			active: active ?? null,
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
