"use client";

import { error } from "console";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
	id,
	label,
	type,
	disabled,
	formatPrice,
	required,
	register,
	errors,
}) => {
	return (
		<div className="w-full relative">
			{formatPrice && (
				<BiDollar
					size={24}
					className="absolute text-customBlack top-4 left-2"
				/>
			)}
			<input
				type={type}
				required
				placeholder=" "
				id={id}
				disabled={disabled}
				className={`peer w-full p-4 pt-6 bg-white border-2 outline-none transition rounded-md disabled:opacity-70 disabled:cursor-not-allowed ${
					formatPrice ? "pl-9" : "pl-4"
				} ${
					errors[id]
						? "border-brandColor focus:border-brandColor"
						: "border-neutral-300 focus:border-black"
				}`}
			/>
			<label
				className={`absolute duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${
					formatPrice ? "left-9" : "left-4"
				} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-md text-customBlack font-medium ${
					errors[id] ? "text-brandColor" : "text-customBlack"
				}`}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
