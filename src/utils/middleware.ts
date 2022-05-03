const API_KEY = 'XTJDYS2PC5HW\n';

const getTrends = (): Promise<object> => {
	return fetch(`https://g.tenor.com/v1/trending?key=${API_KEY}`);
};

const getSearchResults = (query: string): Promise<object> => {
	return fetch(`https://g.tenor.com/v1/search?key=${API_KEY}&q=${query}`);
};

export { getTrends, getSearchResults };
