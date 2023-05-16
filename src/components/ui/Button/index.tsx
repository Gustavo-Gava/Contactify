import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
	action?: "success" | "neutral" | "danger";
}

export const Button = ({ children, action = "neutral", ...rest }: ButtonProps) => {
	return (
		<S.Container {...rest} $action={action}>
			{children}
		</S.Container>
	);
};
