import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { colors } from '../styles';
import reducers from '../reducers';

const theme = extendTheme({ colors });

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export const AppProviders = ({ children }) => (
	<Provider store={store}>
		<ChakraProvider theme={theme}>
			<Router>{children}</Router>
		</ChakraProvider>
	</Provider>
);
