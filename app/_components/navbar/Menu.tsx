"use client";

import { menuItems } from "./constants";

const Menu = () => {
	return (
		<div className="bg-white rounded-md shadow-md w-[250px] flex flex-col gap-[6px] py-2">
			{menuItems.map(item => (
				<div key={item.id}>
					<div className="hover:bg-gray-100 px-3 py-2 text-sm text-customBlack">
						{item.label}
					</div>
					{item.border && <hr className="mt-[6px]" />}
				</div>
			))}
		</div>
	);
};

export default Menu;
