import axios from 'axios';

const productsURL = 'https://join-tsh-api-staging.herokuapp.com/products';

export const fetchProducts = () => axios.get(productsURL);
