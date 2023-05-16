import { IoEllipsisVertical } from "react-icons/io5";
import { Contact } from "../../types/Contact";

import * as S from "./styles";

interface ContactCardProps {
	data: Contact;
	selectContact: (contact: Contact) => void;
}

export const ContactCard = ({ data, selectContact }: ContactCardProps) => {
	const { name, phones } = data;

	if (!phones?.[0]) {
		return <div>hello</div>;
	}

	const profile_picture_url = `https://ui-avatars.com/api/?name=${name}`;

	const mainPhone = phones[0];

	return (
		<S.Container>
			<S.Avatar src={profile_picture_url} />

			<S.Info>
				<S.Name>{name}</S.Name>
				<S.Phone>{mainPhone.number}</S.Phone>
			</S.Info>

			<S.Actions>
				<S.Action aria-label="Three dots vertical" onClick={() => selectContact(data)}>
					<IoEllipsisVertical />
				</S.Action>
			</S.Actions>
		</S.Container>
	);
};
