"use client";
import React, { useState } from "react";
import useRegisterModel from "@/app/hooks/useRegisterModel";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Header from "../Header";
import Input from "../inputs/Input";
import axios from "axios";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RegisterModal = () => {
	const registerModal = useRegisterModel();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = data => {
		setIsLoading(true);

		axios
			.post("/api/register", data)
			.then(() => {
				registerModal.onClose();
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Header label="Welcome to Airbnb" />
			<Input
				id="email"
				register={register}
				disabled={isLoading}
				required
				label="Email"
				errors={errors}
				type="email"
			/>
			<Input
				id="name"
				register={register}
				disabled={isLoading}
				required
				label="Name"
				errors={errors}
				type="text"
			/>
			<Input
				id="password"
				register={register}
				disabled={isLoading}
				required
				label="Password"
				errors={errors}
				type="password"
			/>
		</div>
	);

	const footerContent = (
		<div className="px-6 pb-6 flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<hr className="w-full" />
				or
				<hr className="w-full" />
			</div>
			<Button
				outline
				label="Continue with Google"
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				label="Continue with Github"
				icon={FaGithub}
				onClick={() => {}}
			/>
		</div>
	);

	return (
		<Modal
			actionLabel="Continue"
			isOpen={registerModal.isOpen}
			onClose={registerModal.onClose}
			title="Register"
			disabled={isLoading}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
