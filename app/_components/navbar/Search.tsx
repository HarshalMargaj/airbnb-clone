"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
	return (
		<div className="border rounded-full hover:shadow-md shadow-sm md:w-auto w-full transition">
			<div className="flex items-center h-12 justify-between">
				<div className="px-4 text-customBlack cursor-pointer text-sm font-medium">
					Anywhere
				</div>
				<div className="border-x px-4 cursor-pointer text-customBlack text-sm font-medium sm:block hidden">
					Any week
				</div>
				<div className="flex items-center pl-4 pr-2 gap-4 ">
					<div className=" cursor-pointer text-[#6A6A6A] text-sm hidden sm:block">
						Any guests
					</div>
					<div className="h-8 w-8 rounded-full bg-[#FF385C] flex items-center justify-center text-white cursor-pointer">
						<IoSearch />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
