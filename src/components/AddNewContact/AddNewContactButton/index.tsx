import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export const AddNewContactButton = ({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return <S.Container {...rest}>Add new contact</S.Container>;
};
