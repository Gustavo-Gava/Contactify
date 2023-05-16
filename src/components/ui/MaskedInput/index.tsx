import { InputHTMLAttributes } from "react";
import { IoMdRemove } from "react-icons/io";
import ReactMaskedInput from "react-text-mask";

import * as S from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	removeFunction?: () => void;
	error?: string | null;
}

export const MaskedInput = ({ removeFunction, name, error, ...rest }: InputProps) => {
	const phoneMask = (value: any) => {
		const hasOptionalDigit = value.length >= 19 ? true : false;
		const optionalDigit = hasOptionalDigit ? [/\d/, "-"] : ["-"];

		const mask = [
			"+",
			/\d/,
			/\d/,
			" ",
			"(",
			/\d/,
			/\d/,
			")",
			" ",
			/\d/,
			/\d/,
			/\d/,
			/\d/,
			...optionalDigit,
			/\d/,
			/\d/,
			/\d/,
			/\d/,
		];

		return mask;
	};

	return (
		<S.Container>
			<S.InputWrapper error={!!error}>
				<ReactMaskedInput guide={false} mask={phoneMask} className="input" name={name} {...rest} />

				{removeFunction && (
					<S.RemoveButton onClick={removeFunction}>
						<IoMdRemove />
					</S.RemoveButton>
				)}
			</S.InputWrapper>

			{error && <S.Error>{error}</S.Error>}
		</S.Container>
	);
};
