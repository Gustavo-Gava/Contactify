import { useQuery } from "@tanstack/react-query";

import { ContactCard } from "../../components/ContactCard";
import { AddNewContact } from "../../components/AddNewContact";

import { api } from "../../services/api";

import { Contact } from "../../types/Contact";

import * as S from "./styles";

export const Home = () => {
	const { isLoading, data, error } = useQuery({
		queryKey: ["contacts"],
		queryFn: () => api.get("/contacts?_sort=name&_order=asc"),
	});

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>Error</p>;

	return (
		<S.Container>
			<S.Header>Contacts</S.Header>

			<S.Main>
				{data?.data.map((contact: Contact) => (
					<ContactCard key={contact.id} data={contact} />
				))}
			</S.Main>

			<AddNewContact />
		</S.Container>
	);
};
