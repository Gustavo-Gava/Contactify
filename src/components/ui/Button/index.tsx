import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
	return <S.Container {...rest}>{children}</S.Container>;
};
