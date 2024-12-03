"use client";

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon: IconType;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	small,
	icon: Icon,
}) => {
	return (
		<button
			type="submit"
			onClick={onClick}
			disabled={disabled}
			className={`disabled:opacity-70 disabled:cursor-not-allowed relative rounded-md hover:opacity-80 transition w-full py-[14px] px-6 text-sm ${
				outline
					? "bg-white outline font-bold text-customBlack hover:bg-gray-50"
					: "bg-brandColor text-white font-bold "
			}`}
		>
			{Icon && (
				<div>
					<Icon size={24} className="absolute left-4 top-3" />
				</div>
			)}
			{label}
		</button>
	);
};

export default Button;
