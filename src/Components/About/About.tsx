import React, { ReactElement } from 'react';
import './About.css';

export default function (): ReactElement | null {
	return (
		<div className="about-page">
			<h1>About this application</h1>
			<p>This is a sample project created as part of interview.</p>
		</div>
	);
}
