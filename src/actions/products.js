import * as api from '../api';

export const getProducts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchProducts();
		const { items } = data;

		dispatch({ type: 'FETCH_ALL', payload: items });
	} catch (error) {
		console.log(error);
	}
};

export const getProductsBySearch = (search) => async (dispatch) => {
	try {
		const { data } = await api.fetchProductsBySearch(search);
		const { items } = data;

		dispatch({ type: 'FETCH_BY_SEARCH', payload: items });
	} catch (error) {
		console.log(error);
	}
};

export const getProductsByFilters = (promo, active) => async (dispatch) => {
	try {
		const { data } = await api.fetchProductsByFilters(promo, active);
		const { items } = data;

		dispatch({ type: 'FETCH_BY_FILTERS', payload: items });
	} catch (error) {
		console.log(error);
	}
};

export const getProductsBySearchAndFilters =
	(search, promo, active) => async (dispatch) => {
		try {
			const { data } = await api.fetchProductsBySearchAndFilters(
				search,
				promo,
				active
			);
			const { items } = data;

			dispatch({ type: 'FETCH_BY_FILTERS', payload: items });
		} catch (error) {
			console.log(error);
		}
	};
