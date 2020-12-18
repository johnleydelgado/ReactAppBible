import { useEffect, useState } from "react";

const ReusableApiRequest = (url) => {
	const [data, setData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"api-key": "cf738bbca742523b4237e47f3e1190f2",
			},
		})
			.then((response) => response.json())
			.then((json) => setData(json.data))
			.catch((error) => setError(error))
			.finally(() => {
				setIsLoaded(true);
			});
	}, [isLoaded]);

	return { error, isLoaded, data };
};

export default ReusableApiRequest;
