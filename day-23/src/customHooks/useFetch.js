import { useState, useEffect } from 'react';

export const useFetch = url => {
	const [state, setState] = useState({ data: null, loading: true });

	useEffect(() => {
		const fetchApi = async () => {
			setState({ data: null, loading: true });

			const response = await fetch(url);
			const result = await response.json();

			setState({ data: result, loading: false });
		};

		fetchApi();
	}, [url]);

	return state;
};
