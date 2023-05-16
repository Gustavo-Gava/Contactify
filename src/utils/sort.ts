import { Contact } from "../types/Contact";

export const sortByLetter = (contacts: Contact[]) => {
	const innerSortedContacts = {} as Record<string, Contact[]>;

	if (!contacts?.[0]) return innerSortedContacts;

	contacts.forEach((contact: Contact) => {
		const firstLetter = contact.name[0].toUpperCase();

		if (!innerSortedContacts[firstLetter]) {
			innerSortedContacts[firstLetter] = [];
		}

		innerSortedContacts[firstLetter].push(contact);
	});

	return innerSortedContacts;
};

export const sortByGroup = (contacts: Contact[]) => {
	const innerSortedContacts = {} as Record<string, Contact[]>;

	if (!contacts?.[0]) return innerSortedContacts;

	contacts.forEach((contact: Contact) => {
		const group = contact.category;

		if (!innerSortedContacts[group]) {
			innerSortedContacts[group] = [];
		}

		innerSortedContacts[group].push(contact);
	});

	console.log(innerSortedContacts);

	return innerSortedContacts;
};
