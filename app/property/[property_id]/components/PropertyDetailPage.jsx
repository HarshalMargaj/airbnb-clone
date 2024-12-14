"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/app/api/route";
import ImageGrid from "./ImageGrid";
import { FaRegHeart } from "react-icons/fa";

const PropertyDetailPage = () => {
	const params = useParams();
	const { property_id } = params;
	const [property, setProperty] = useState();

	useEffect(() => {
		const getProperty = async () => {
			try {
				const data = await fetchProperty(property_id);
				setProperty(data.data[0]); // Assuming the API response structure based on your console output.
			} catch (error) {
				console.log(error);
			}
		};
		getProperty();
	}, []);

	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-between items-center">
				<div className="text-3xl font-semibold text-[#222222]">
					{property?.property_name}
				</div>
				<div className="flex items-center gap-2 cursor-pointer">
					<FaRegHeart />
					Save
				</div>
			</div>
			<ImageGrid images={property?.property_photos} />
			<div>
				<div>
					<div className="text-2xl font-semibold">
						Room in {property?.property_location}
					</div>
					<div className="text-gray-900 text-md">
						{property?.property_details}
					</div>
					<hr className="my-8" />
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default PropertyDetailPage;
