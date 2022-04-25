import React, { ReactElement } from 'react';

interface GifProps {
	gifData: any;
}

export default function Gif({ gifData }: GifProps): ReactElement {
	return <img src={gifData.media[0].gif.url} alt="" />;
}
