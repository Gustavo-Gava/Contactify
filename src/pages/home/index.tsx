import { Fragment, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineSortAscending } from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";
import { CgSortAz } from "react-icons/cg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactSelect from "react-select";
import ReactModal from "react-modal";

import { ContactInfo } from "../../components/ContactInfo";
import { SearchInput } from "../../components/SearchInput";
import { ContactCard } from "../../components/ContactCard";
import { AddNewContact } from "../../components/AddNewContact";
import ImportContactsFromGoogle from "../../components/Google/index.tsx";

import { api } from "../../services/api";
import { CLIENT_ID } from "../../consts";

import { Contact } from "../../types/Contact";

import { centeredModalStyles } from "../../styles/global/commonStyles";
import { ContactListLoading } from "../../components/ContactListLoading";
import * as S from "./styles";
import { Filters } from "../../components/Filters";

const sortByLetter = (contacts: Contact[]) => {
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

const sortByGroup = (contacts: Contact[]) => {
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

export const Home = () => {
	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState<"name" | "category">("name");
	const [filter, setFilter] = useState<string[] | undefined>(undefined);
	const [contactHighlighted, setContactHighlighted] = useState<Contact | null>(null);

	const { isLoading, data, error, refetch } = useQuery({
		queryKey: ["contacts"],
		queryFn: () => api.get(`/contacts?_sort=name&_order=asc&${filter?.join("&")}`),
	});

	const filteredData = useMemo(() => {
		return data?.data.filter((contact: Contact) =>
			contact.name.toLowerCase().startsWith(search.toLowerCase())
		);
	}, [data, search]);

	const sortedContacts = useMemo(() => {
		if (sortBy === "name") return sortByLetter(filteredData);

		if (sortBy === "category") return sortByGroup(filteredData);
	}, [filteredData, sortBy]);

	useEffect(() => {
		refetch();
	}, [filter, refetch]);

	if (error) return <p>Error</p>;

	if (isLoading) return <ContactListLoading />;

	return (
		<S.Container>
			<S.Header>
				<S.Title>Contacts</S.Title>

				<S.HeaderRow>
					<SearchInput value={search} setSearch={setSearch} />

					<ReactSelect
						options={[
							{ value: "name", label: <AiOutlineSortAscending /> },
							{ value: "category", label: <BiSortDown /> },
						]}
						unstyled
						placeholder={<CgSortAz />}
						className="react-select-container"
						classNamePrefix="react-select"
						onChange={(option) => setSortBy(option?.value as "name" | "category")}
					/>
				</S.HeaderRow>

				<Filters setFilter={setFilter} refetch={refetch} />
			</S.Header>

			<S.Main>
				{CLIENT_ID && (
					<GoogleOAuthProvider clientId={CLIENT_ID}>
						<ImportContactsFromGoogle refetch={refetch} />
					</GoogleOAuthProvider>
				)}

				<S.ContactsWrapper>
					{sortedContacts && (
						<>
							{Object.keys(sortedContacts).map((letter) => (
								<Fragment key={letter}>
									<S.Letter>
										<span>{letter}</span>
									</S.Letter>

									<S.ContactsGroup>
										{sortedContacts[letter].map((contact: Contact) => (
											<ContactCard
												key={contact.id}
												data={contact}
												selectContact={setContactHighlighted}
											/>
										))}
									</S.ContactsGroup>
								</Fragment>
							))}
						</>
					)}

					<AddNewContact refetchData={refetch} />
				</S.ContactsWrapper>
			</S.Main>

			{contactHighlighted && (
				<ReactModal
					isOpen={!!contactHighlighted}
					style={centeredModalStyles}
					onRequestClose={() => setContactHighlighted(null)}
				>
					<ContactInfo
						data={contactHighlighted}
						refetchData={refetch}
						closeModal={() => setContactHighlighted(null)}
					/>
				</ReactModal>
			)}
		</S.Container>
	);
};
