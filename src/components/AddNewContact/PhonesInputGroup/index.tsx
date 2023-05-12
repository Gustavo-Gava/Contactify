import { useFieldArray, useFormContext } from "react-hook-form";
import { BsPlus, BsTelephone } from "react-icons/bs";

import { Input } from "../../ui/Input";
import { NewContactFormData } from "..";

import * as S from "../styles";

export const PhonesInputGroup = () => {
	const {
		control,
		register,
		formState: { errors },
	} = useFormContext<NewContactFormData>();

	console.log("errors", errors);

	const phones = useFieldArray({
		control,
		name: "phones",
	});

	return (
		<S.InputGroup>
			<S.InputGroupContent>
				<BsTelephone size={16} />

				<S.InputWrapper>
					{phones.fields.map((field, index) => (
						<Input
							key={field.id}
							placeholder={`Phone ${index + 1}`}
							removeFunction={index !== 0 ? () => phones.remove(index) : undefined}
							type="tel"
							error={errors?.phones?.[index]?.number?.message}
							{...register(`phones.${index}.number`)}
						/>
					))}
				</S.InputWrapper>
			</S.InputGroupContent>

			<S.InputGroupFooter>
				<S.AddPhoneButton type="button" onClick={() => phones.append({ number: "", type: "" })}>
					<BsPlus size={16} />
					Add phone number
				</S.AddPhoneButton>
			</S.InputGroupFooter>
		</S.InputGroup>
	);
};
