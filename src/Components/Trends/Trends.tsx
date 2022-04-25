import React, { ReactElement, useEffect, useState } from 'react';
import { getData } from '../../utils/middleware';
import Gif from '../Gif/Gif';
import { map } from 'lodash';

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
		<div>
			{loading ? (
				<div>loading</div>
			) : error ? (
				<p>ERROR!</p>
			) : (
				map(data, (gifData: GifData) => <Gif gifData={gifData} key={gifData.id} />)
			)}
		</div>
	);
}
