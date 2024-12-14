import React from "react";
import { BiRupee } from "react-icons/bi";
import Link from "next/link";

const Card = ({ property }) => {
	// console.log(property);
	return (
		<div className="w-[300px]">
			<Link href={`/property/${property.id}`}>
				<div className=" flex flex-col gap-2 cursor-pointer">
					<div>
						<img
							src={`${process.env.NEXT_PUBLIC_API_UPLOAD_URL}${property.property_main_image.url}`}
							alt="property image"
							className="rounded-lg h-[300px] w-[300px]"
						/>
					</div>
					<div className="">
						<div className="font-medium">
							{property?.property_location}
						</div>
						<div className="text-gray-600">
							{property?.property_distance}
						</div>
						<div className="flex items-center">
							<BiRupee />
							<span className="font-medium mr-2">
								{property?.property_price}
							</span>
							night
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
