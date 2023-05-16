import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { BsPlus, BsTelephone } from "react-icons/bs";

import { NewContactFormData } from "..";

import * as S from "../styles";
import { MaskedInput } from "../../ui/MaskedInput";

export const PhonesInputGroup = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<NewContactFormData>();

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
						<Controller
							key={field.id}
							name={`phones.${index}.number`}
							render={({ field }) => (
								<MaskedInput
									placeholder={`Phone ${index + 1}`}
									removeFunction={index !== 0 ? () => phones.remove(index) : undefined}
									error={errors?.phones?.[index]?.number?.message}
									{...field}
								/>
							)}
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
