import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import { BsPlus } from "react-icons/bs";

export const AddNewContactButton = ({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<S.Container {...rest}>
			<BsPlus size={22} />
			Add new contact
		</S.Container>
	);
};
