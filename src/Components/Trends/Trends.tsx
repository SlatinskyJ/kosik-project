import React, { ReactElement, useEffect, useState } from 'react';
import { getData } from '../../utils/middleware';
import Gif from '../Gif/Gif';
import { map } from 'lodash';
import './Trends.scss';

interface GifData {
	id: string;
	title: string;
	content_description: string;
	media: any;
}

export default function Trends(): ReactElement {
	const [data, setData] = useState<Array<GifData> | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<object | null>(null);

	const gifSize = 'tinygif';

	useEffect(() => {
		setLoading(true);
		getData().then((response: any) => {
			setLoading(false);
			if (response.status === 200) {
				response.json().then((data: any) => {
					setData(data.results);
				});
			} else {
				setError({});
			}
		});
	}, []);

	return (
		<div className="trends-page">
			{loading ? (
				<div>loading</div>
			) : error ? (
				<p>ERROR!</p>
			) : (
				<div className="gif-container">
					{map(data, (gifData: GifData) => (
						<Gif gifData={gifData} key={gifData.id} size={gifSize} />
					))}
				</div>
			)}
		</div>
	);
}
