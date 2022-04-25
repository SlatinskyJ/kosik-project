const API_KEY = 'XTJDYS2PC5HW\n';

const getData = (): Promise<object> => {
	return fetch(`https://g.tenor.com/v1/trending?key=${API_KEY}`);
};

export { getData };
