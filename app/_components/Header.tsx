"use client";

import React from "react";

interface HeaderProps {
	label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
	return <div className="text-2xl font-bold text-customBlack">{label}</div>;
};

export default Header;
