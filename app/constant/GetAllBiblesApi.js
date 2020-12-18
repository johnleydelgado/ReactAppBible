import React, { useState, useEffect } from "react";
const GetAllBiblesApi = (url) => {
	const [data, setData] = useState([]);
	const [language, setLaguage] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [anotherData, setAnotherData] = useState([]);

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
			.catch((error) => console.log(error))
			.finally(() => {
				setIsLoaded(true);
			});
		let sortedVersions = {};
		const versions = data.map((data) => {
			return {
				name: data.name,
				id: data.id,
				abbreviation: data.abbreviation,
				description: data.description,
				language: data.language.name,
			};
		});
		versions.map((data) => {
			if (!sortedVersions[data.language]) {
				sortedVersions[data.language] = [];
			}
			sortedVersions[data.language].push(data);
		});
		setAnotherData(sortedVersions);
	}, [isLoaded]);

	return { isLoaded, data, anotherData };
};
export default GetAllBiblesApi;
