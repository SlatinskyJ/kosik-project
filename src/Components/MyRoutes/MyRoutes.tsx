import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';

export default function (): ReactElement {
	return (
		<Routes>
			<Route path="/" element={<p>Home</p>} />
			<Route path="/search" element={<p>Search</p>} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
}
