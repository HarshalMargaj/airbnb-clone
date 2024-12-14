import React from "react";

const ImageGrid = ({ images }) => {
	return (
		<div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
			{images && (
				<div className="relative group w-full h-full rounded-lg overflow-hidden col-span-2 row-span-2">
					<img
						src={`${process.env.NEXT_PUBLIC_API_UPLOAD_URL}${images[0]?.url}`}
						alt="Large Image"
						className=" w-full h-full object-cover rounded-lg"
					/>
					<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg"></div>
				</div>
			)}

			{images?.slice(1).map((image, index) => (
				<div
					key={index}
					className="relative group w-full h-full rounded-lg overflow-hidden"
				>
					<img
						src={`${process.env.NEXT_PUBLIC_API_UPLOAD_URL}${image.url}`}
						alt={`Image ${index + 1}`}
						className="w-full h-full object-cover"
					/>
					{/* Overlay */}
					<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg"></div>
				</div>
			))}
		</div>
	);
};

export default ImageGrid;
