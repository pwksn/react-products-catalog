import * as api from '../api';

export const getProducts = (page) => async (dispatch) => {
	try {
		const { data } = await api.fetchProducts(page);

		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const getProductsBySearch = (search) => async (dispatch) => {
	try {
		const { data } = await api.fetchProductsBySearch(search);

		dispatch({ type: 'FETCH_BY_SEARCH', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const getProductsByFilters = (promo, active) => async (dispatch) => {
	try {
		const { data } = await api.fetchProductsByFilters(promo, active);

		dispatch({ type: 'FETCH_BY_FILTERS', payload: data });
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

			dispatch({ type: 'FETCH_BY_FILTERS', payload: data });
		} catch (error) {
			console.log(error);
		}
	};
