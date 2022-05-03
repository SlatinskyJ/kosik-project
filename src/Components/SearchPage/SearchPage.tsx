import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from 'react';
import './SearchPage.scss';
import { TextField } from '@mui/material';
import { debounce, map } from 'lodash';
import { getSearchResults } from '../../utils/middleware';
import Gif from '../Gif/Gif';

export default function SearchPage(): ReactElement {
	const [inputValue, setInputValue] = useState<string>('');
	const [data, setData] = useState<any | null>(null);

	const onInputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
		setInputValue(e.target.value);
	};

	const onInputChangeDebounced = useCallback(debounce(onInputChange, 300), []);

	useEffect(() => {
		getSearchResults(inputValue).then((response: any) => {
			response.status === 200 &&
				response.json().then((responseData: object) => {
					setData(responseData);
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
			<div>{inputValue}</div>
			{/*<Gifs data={data}/>*/}
			<div>
				{data &&
					data.results.length > 0 &&
					map(data.results, (gifData) => <Gif gifData={gifData} size={'tinygif'} />)}
			</div>
		</div>
	);
}
