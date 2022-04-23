export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
		case 'FETCH_BY_SEARCH':
		case 'FETCH_BY_FILTERS':
			return {
				...state,
				products: action.payload.items,
				currentPage: action.payload.meta.currentPage,
				totalPages: action.payload.meta.totalPages,
			};
		default:
			return state;
	}
};
