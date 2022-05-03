import React, { ReactElement } from 'react';
import './Gif.scss';

export interface GifData {
	id: string;
	title: string;
	content_description: string;
	media: any;
}

interface GifProps {
	gifData: GifData;
	size: string;
}

export default function Gif({ gifData, size }: GifProps): ReactElement {
	return (
		<div className="gif">
			<img className="gif-content" src={gifData.media[0][size].url} alt="" />
			<div className="gif-title">{gifData.content_description}</div>
		</div>
	);
}
