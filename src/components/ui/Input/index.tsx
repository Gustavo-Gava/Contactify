import { InputHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";
import { IoMdRemove } from "react-icons/io";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	removeFunction?: () => void;
	error?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ removeFunction, name, error, label, ...rest }, ref) => {
		return (
			<S.Container>
				{label && <S.Label htmlFor={name}>{label}</S.Label>}

				<S.InputWrapper $error={!!error}>
					<S.Input name={name} ref={ref} {...rest} />

					{removeFunction && (
						<S.RemoveButton onClick={removeFunction}>
							<IoMdRemove />
						</S.RemoveButton>
					)}
				</S.InputWrapper>

				{error && <S.Error>{error}</S.Error>}
			</S.Container>
		);
	}
);
