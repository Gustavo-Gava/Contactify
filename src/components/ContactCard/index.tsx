import { IoEllipsisVertical } from "react-icons/io5";

import * as S from "./styles";
import { Contact } from "../../types/Contact";

const profile_picture_url = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";

interface ContactCardProps {
	data: Contact;
}

export const ContactCard = ({ data }: ContactCardProps) => {
	const { name, phones } = data;

	if (!phones?.[0]) {
		return <div>hellow</div>;
	}

	const mainPhone = phones[0];

	return (
		<S.Container>
			<S.Avatar src={profile_picture_url} />

			<S.Info>
				<S.Name>{name}</S.Name>
				<S.Phone>{mainPhone.number}</S.Phone>
			</S.Info>

			<S.Actions>
				<S.Action aria-label="Three dots vertical">
					<IoEllipsisVertical />
				</S.Action>
			</S.Actions>
		</S.Container>
	);
};
