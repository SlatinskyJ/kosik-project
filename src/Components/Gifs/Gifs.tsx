import React, { ReactElement } from 'react';
import { map } from 'lodash';
import Gif, { GifData } from '../Gif/Gif';
import './Gifs.scss';

interface GifsProps {
	data: Array<GifData> | null;
}

export default function Gifs({ data }: GifsProps): ReactElement {
	return (
		<div className="gifs">
			{data &&
				data.length > 0 &&
				map(
					data,
					(gifData: GifData): ReactElement => <Gif gifData={gifData} size={'tinygif'} key={gifData.id} />
				)}
		</div>
	);
}
