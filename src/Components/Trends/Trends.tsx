import React, { ReactElement, useEffect, useState } from 'react';
import { getTrends } from '../../utils/middleware';
import './Trends.scss';
import Gifs from '../Gifs/Gifs';
import { GifData } from '../Gif/Gif';

export default function Trends(): ReactElement {
	const [data, setData] = useState<Array<GifData> | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<object | null>(null);

	useEffect(() => {
		setLoading(true);
		getTrends().then((response: any) => {
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
		<div className="trends-page">{loading ? <div>loading</div> : error ? <p>ERROR!</p> : <Gifs data={data} />}</div>
	);
}
