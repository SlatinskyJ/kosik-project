import React, { ReactElement } from 'react';
import './App.css';
import MyRoutes from '../MyRoutes/MyRoutes';
import PageHeader from '../PageHeader/PageHeader';

function App(): ReactElement {
	return (
		<div className="App">
			<PageHeader />
			<MyRoutes />
		</div>
	);
}

export default App;
