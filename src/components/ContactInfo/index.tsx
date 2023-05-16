import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BsX } from "react-icons/bs";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";

import { NewContactFormData } from "../AddNewContact";
import { contactSchema } from "../../validation/contactSchema";
import { NameInputGroup } from "../AddNewContact/NameInputGroup";
import { PhonesInputGroup } from "../AddNewContact/PhonesInputGroup";
import { AddressesInputGroup } from "../AddNewContact/AddressesInputGroup";

import { Contact } from "../../types/Contact";

import { Button } from "../ui/Button";
import { deleteContact, updateContact } from "../../api/contact";

import * as S from "./styles";

interface ContactInfoProps {
	data: Contact;
	closeModal: () => void;
	refetchData: () => void;
}

export const ContactInfo = ({ closeModal, refetchData, data }: ContactInfoProps) => {
	const [confirmDelete, setConfirmDelete] = useState(false);

	const methods = useForm<NewContactFormData>({
		resolver: yupResolver(contactSchema),
		defaultValues: {
			name: data.name,
			category: data.category,
			phones: [...data.phones],
			addresses: [...data.addresses],
		},
	});

	const { handleSubmit } = methods;

	async function onSubmit(formData: NewContactFormData) {
		try {
			await updateContact(data.id, formData);

			toast.success("Contact updated successfully!");
			refetchData();
			closeModal();
		} catch (err) {
			console.log(err);
			toast.error("Error updating contact!");
		}
	}

	async function handleDeleteContact() {
		try {
			await deleteContact(data.id);

			toast.success("Contact deleted successfully!");
			refetchData();
			closeModal();
		} catch (err) {
			toast.error("Error deleting contact!");
			console.log(err);
		}
	}

	return (
		<S.Container>
			<FormProvider {...methods}>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.FormHeader>
						<h3>{data.name}</h3>

						<S.CloseButton type="button" onClick={closeModal}>
							<BsX size={24} />
						</S.CloseButton>
					</S.FormHeader>

					<NameInputGroup />

					<PhonesInputGroup />

					<AddressesInputGroup />

					<Button type="submit" action="success">
						Save Changes
					</Button>

					{!confirmDelete && (
						<S.DeleteUserButton type="button" onClick={() => setConfirmDelete(true)}>
							Delete Contact
						</S.DeleteUserButton>
					)}

					{confirmDelete && (
						<S.ConfirmDelete>
							<p>Are you sure you want to delete this contact?</p>

							<S.ConfirmDeleteButtons>
								<Button type="button" onClick={() => setConfirmDelete(false)}>
									No
								</Button>
								<Button type="button" onClick={handleDeleteContact} action="danger">
									Yes, delete it
								</Button>
							</S.ConfirmDeleteButtons>
						</S.ConfirmDelete>
					)}
				</S.Form>
			</FormProvider>
		</S.Container>
	);
};
