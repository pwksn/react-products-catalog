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
