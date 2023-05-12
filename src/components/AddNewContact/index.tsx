import { useState } from "react";
import Modal from "react-modal";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AddNewContactButton } from "./AddNewContactButton";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

import { api } from "../../services/api";

import { BsPerson, BsX } from "react-icons/bs";

import { toast } from "react-toastify";
import { PhonesInputGroup } from "./PhonesInputGroup";
import { AddressesInputGroup } from "./AddressesInputGroup";

import * as S from "./styles";
import { NameInputGroup } from "./NameInputGroup";

const schema = yup.object({
	name: yup.string().required("Name is required"),
	lastname: yup.string(),
	category: yup.string(),

	phones: yup.array().of(
		yup.object({
			number: yup.string().required("Phone number is required"),
			type: yup.string(),
		})
	),

	addresses: yup.array().of(
		yup.object({
			street: yup.string(),
			city: yup.string(),
			state: yup.string(),
			zipcode: yup.string(),
		})
	),
});

export type NewContactFormData = yup.InferType<typeof schema>;

export const AddNewContact = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const methods = useForm<NewContactFormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			phones: [{ number: "", type: "" }],
			addresses: [{ street: "", city: "", state: "", zipcode: "" }],
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onSubmit = async (data: NewContactFormData) => {
		try {
			await api.post("/contacts", data);

			toast.success("Contact created successfully!");
			setIsModalOpen(false);
		} catch (err) {
			console.log(err);

			toast.error("Error creating contact!");
			toast.info("Try again later");
		}
	};

	return (
		<>
			<AddNewContactButton onClick={() => setIsModalOpen(!isModalOpen)} />

			<Modal isOpen={isModalOpen} contentLabel="Modal" style={S.customStyles}>
				<FormProvider {...methods}>
					<S.Form onSubmit={handleSubmit(onSubmit)}>
						<S.FormHeader>
							<h3>New contact</h3>

							<S.CloseButton onClick={() => setIsModalOpen(false)}>
								<BsX size={24} />
							</S.CloseButton>
						</S.FormHeader>

						<NameInputGroup />

						<PhonesInputGroup />

						<AddressesInputGroup />

						<Button type="submit">Save</Button>
					</S.Form>
				</FormProvider>
			</Modal>
		</>
	);
};
