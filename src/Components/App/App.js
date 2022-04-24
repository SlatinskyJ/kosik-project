import React from 'react';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
				</ul>
				<hr />
				<Routes>
					<Route path="/" element={<p>This is Home!</p>} />
					<Route path="/about" element={<p>This is About!</p>} />
					<Route path="/search" element={<p>This is Search!</p>} />
				</Routes>
				<Navigate to="/" />
			</Router>
		</div>
	);
}

export default App;
