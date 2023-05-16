import { useState } from "react";
import Modal from "react-modal";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AddNewContactButton } from "./AddNewContactButton";
import { Button } from "../ui/Button";

import { BsX } from "react-icons/bs";

import { toast } from "react-toastify";
import { PhonesInputGroup } from "./PhonesInputGroup";
import { AddressesInputGroup } from "./AddressesInputGroup";

import * as S from "./styles";
import { NameInputGroup } from "./NameInputGroup";
import { centeredModalStyles } from "../../styles/global/commonStyles";
import { contactSchema } from "../../validation/contactSchema";
import { createContact } from "../../api/contact";

export type NewContactFormData = yup.InferType<typeof contactSchema>;

interface AddNewContactProps {
	refetchData: () => void;
}

export const AddNewContact = ({ refetchData }: AddNewContactProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const methods = useForm<NewContactFormData>({
		resolver: yupResolver(contactSchema),
		defaultValues: {
			phones: [{ number: "", type: "" }],
			category: "",
			addresses: [{ street: "", city: "", state: "", zip: "" }],
		},
	});

	const { handleSubmit } = methods;

	const onSubmit = async (data: NewContactFormData) => {
		try {
			await createContact(data);

			refetchData();
			methods.reset();
			toast.success("Contact created successfully!");
			setIsModalOpen(false);
		} catch (err) {
			console.error(err);

			toast.error("Error creating contact!");
		}
	};

	function handleAddNewContact(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();

		setIsModalOpen(!isModalOpen);
	}

	return (
		<>
			<AddNewContactButton onClick={(e) => handleAddNewContact(e)} />

			<Modal
				isOpen={isModalOpen}
				contentLabel="Modal"
				style={centeredModalStyles}
				ariaHideApp={false}
			>
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
