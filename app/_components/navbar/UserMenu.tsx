"use client";

import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import Avatar from "./Avatar";
import Menu from "./Menu";
import { ClickAwayListener } from "@mui/base";

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(prev => !prev);
	};

	const handleClickAway = () => {
		setIsOpen(false);
	};

	return (
		<div className="flex items-center transition">
			<div className="h-11 my-auto hover:bg-gray-100 rounded-full px-4 cursor-pointer text-customBlack text-sm font-medium md:block hidden py-3">
				Airbnb your home
			</div>
			<div className="md:block hidden">
				<div className="h-11 w-11 rounded-full hover:bg-gray-100 flex items-center justify-center text-customBlack cursor-pointer  ">
					<TbWorld />
				</div>
			</div>
			<ClickAwayListener onClickAway={handleClickAway}>
				<div
					className="flex items-center rounded-full pl-1 pr-1 py-1 border h-11 hover:shadow-md transition md:pl-[14px] md:gap-2 cursor-pointer gap-0 relative"
					onClick={toggleOpen}
				>
					<div>
						<IoMdMenu size={16} />
					</div>
					<div className="hidden md:block">
						<Avatar />
					</div>
					{isOpen && (
						<div className="absolute z-10 top-14 right-0">
							<Menu />
						</div>
					)}
				</div>
			</ClickAwayListener>
		</div>
	);
};

export default UserMenu;
