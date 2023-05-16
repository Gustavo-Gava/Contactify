import { useGoogleLogin } from "@react-oauth/google";
import { api } from "../../services/api";
import { Button } from "../ui/Button";
import { CLIENT_ID, REDIRECT_URI } from "../../consts";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { googlePeopleApi } from "../../services/googlePeopleApi";

interface GoogleUser {
	access_token: string;
}

interface Connection {
	resourceName: string;
	etag: string;
	names: {
		displayName: string;
	}[];
	phoneNumbers: {
		value: string;
		type: string;
	}[];
}

interface Data {
	data: {
		connections: Connection[];
	};
}

interface ImportContactsFromGoogleProps {
	refetch: () => void;
}

function formatGoogleContacts(contacts: Connection[]) {
	return contacts.map((contact: Connection) => {
		return {
			id: uuidv4(),
			name: contact.names[0].displayName ?? "No name",
			category: "No category",
			phones: contact.phoneNumbers.map((phone) => {
				return {
					number: phone.value,
					type: phone.type,
				};
			}),
			addresses: [],
		};
	});
}

const ImportContactsFromGoogle = ({ refetch }: ImportContactsFromGoogleProps) => {
	const [importedFromGoogle, setImportedFromGoogle] = useState(false);

	const handleSuccess = async (googleUser: GoogleUser) => {
		try {
			const { data }: Data = await googlePeopleApi.get(
				"/v1/people/me/connections?personFields=names,phoneNumbers",
				{
					headers: {
						Authorization: `Bearer ${googleUser.access_token}`,
					},
				}
			);

			const contacts = formatGoogleContacts(data.connections);
			await Promise.all(contacts.map((contact) => api.post("/contacts", contact)));

			toast.success("Contacts imported successfully!");
			setImportedFromGoogle(true);
			refetch();
		} catch (error) {
			console.error("Error fetching connections:", error);
		}
	};

	const handleFailure = (error: unknown) => {
		console.error("Google login failure:", error);
	};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const signIn = useGoogleLogin({
		clientId: CLIENT_ID,
		redirectUri: REDIRECT_URI,
		onSuccess: handleSuccess,
		onFailure: handleFailure,
		accessType: "offline",
		scope: "https://www.googleapis.com/auth/contacts.readonly",
	});

	if (importedFromGoogle) {
		return <></>;
	}

	return <Button onClick={signIn}>Import contacts from Google</Button>;
};

export default ImportContactsFromGoogle;
