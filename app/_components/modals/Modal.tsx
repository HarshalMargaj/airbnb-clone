"use client";

import React, { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel?: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose = () => {},
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}
		console.log("in submit");
		onSubmit();
	}, [disabled, onSubmit]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}

		secondaryAction();
	}, [disabled, secondaryAction]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div className="flex  items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
				<div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto  rounded-lg">
					<div
						className={`translate duration-300 h-full ${
							showModal
								? "translate-y-0 opacity-100"
								: "translate-y-full opacity-0"
						}`}
					>
						<div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
							<div className="flex items-center p-6 rounded-t justify-center relative border-b">
								<button
									className="rounded-full p-1 hover:bg-gray-100 absolute left-9"
									onClick={handleClose}
								>
									<IoMdClose />
								</button>
								<div className="text-customBlack font-bold text-sm">
									{title}
								</div>
							</div>

							<div className="relative p-6 flex-auto">{body}</div>
							<div className="flex flex-col gap-4 p-6">
								{secondaryAction && secondaryActionLabel && (
									<Button
										label={secondaryActionLabel}
										onClick={handleSecondaryAction}
										disabled={disabled}
									/>
								)}
								<Button
									label={actionLabel}
									onClick={handleSubmit}
									disabled={disabled}
								/>
							</div>
							{footer}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
