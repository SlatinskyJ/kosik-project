import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from 'react';
import './SearchPage.scss';
import { TextField } from '@mui/material';
import { debounce } from 'lodash';
import { getSearchResults } from '../../utils/middleware';
import Gifs from '../Gifs/Gifs';
import { GifData } from '../Gif/Gif';

export default function SearchPage(): ReactElement {
	const [inputValue, setInputValue] = useState<string>('');
	const [data, setData] = useState<Array<GifData> | null>(null);

	const onInputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
		setInputValue(e.target.value);
	};

	const onInputChangeDebounced = useCallback(debounce(onInputChange, 300), []);

	useEffect(() => {
		getSearchResults(inputValue).then((response: any) => {
			response.status === 200 &&
				response.json().then((responseData: any) => {
					setData(responseData.results);
				});
		});
	}, [inputValue]);

	return (
		<div className="search-page">
			<TextField
				className="search-page--input"
				id="standard-basic"
				label="Search"
				variant="standard"
				autoComplete="off"
				autoFocus={true}
				onChange={onInputChangeDebounced}
			/>
			<div className="search-page--content">{inputValue && <Gifs data={data} />}</div>
		</div>
	);
}
