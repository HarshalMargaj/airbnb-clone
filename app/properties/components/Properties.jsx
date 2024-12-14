"use client";
import React, { useEffect, useState } from "react";
import { fetchListings } from "../../api/route";
import Card from "./Card";

const Listings = () => {
	const [properties, setProperties] = useState([]);
	console.log(properties);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getListings = async () => {
			try {
				const data = await fetchListings();
				setProperties(data.data);
			} catch (err) {
				setError(err.message);
			}
		};

		getListings();
	}, []);

	return (
		<div>
			{properties.map(property => (
				<Card property={property} key={property.id} />
			))}
		</div>
	);
};

export default Listings;
