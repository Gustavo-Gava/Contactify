import { api } from "../../services/api";
import { NewContactFormData } from "../../components/AddNewContact";

export const createContact = async (contact: NewContactFormData) => {
	return api.post("/contacts", contact);
};

export const updateContact = async (contactId: string, contact: NewContactFormData) => {
	return api.put(`/contacts/${contactId}`, contact);
};

export const deleteContact = async (contactId: string) => {
	return api.delete(`/contacts/${contactId}`);
};
