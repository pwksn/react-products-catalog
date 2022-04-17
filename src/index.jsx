import React from 'react';
import ReactDOM from 'react-dom';

import { AppProviders } from './providers/AppProviders';
import { App } from './app/App';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colors } from './styles';
import './styles';

const theme = extendTheme({ colors });

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<AppProviders>
			<App />
		</AppProviders>
	</ChakraProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
