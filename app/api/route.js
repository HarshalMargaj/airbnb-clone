export const fetchListings = async () => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/listings?populate=*`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Fetch Listings Error:", error);
		return null;
	}
};

export const fetchProperty = async id => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/listings?filters[id][$eq]=${id}&populate=*`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
				},
			}
		);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
