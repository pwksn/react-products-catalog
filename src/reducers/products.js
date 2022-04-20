export default (products = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
		case 'FETCH_BY_SEARCH':
		case 'FETCH_BY_FILTERS':
			return action.payload;
		default:
			return products;
	}
};
