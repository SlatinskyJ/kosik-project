import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Trends from '../Trends/Trends';
import SearchPage from '../SearchPage/SearchPage';

export default function MyRoutes(): ReactElement {
	return (
		<Routes>
			<Route path="/" element={<Trends />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
}
