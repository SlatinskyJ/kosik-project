import React, { ReactElement } from 'react';
import './App.css';
import MyRoutes from '../MyRoutes/MyRoutes';
import PageHeader from '../PageHeader/PageHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App(): ReactElement {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#0052cc',
			},
			secondary: {
				main: '#edf2ff',
			},
		},
	});

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<PageHeader />
				<MyRoutes />
			</ThemeProvider>
		</div>
	);
}

export default App;
