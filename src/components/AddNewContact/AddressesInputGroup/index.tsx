import { Fragment } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { BsMap, BsPlus } from "react-icons/bs";

import { Input } from "../../ui/Input";
import type { NewContactFormData } from "..";

import * as S from "../styles";

export const AddressesInputGroup = () => {
	const {
		control,
		register,
		formState: { errors },
	} = useFormContext<NewContactFormData>();

	const addresses = useFieldArray({
		control,
		name: "addresses",
	});

	return (
		<S.InputGroup>
			<S.InputGroupContent>
				<BsMap size={16} />

				<S.InputWrapper>
					{addresses.fields.map((field, index) => {
						return (
							<Fragment key={field.id}>
								<Input
									placeholder="Street"
									removeFunction={index !== 0 ? () => addresses.remove(index) : undefined}
									error={errors.addresses?.[index]?.street?.message}
									{...register(`addresses.${index}.street`)}
								/>

								<Input
									placeholder="City"
									error={errors.addresses?.[index]?.city?.message}
									{...register(`addresses.${index}.city`)}
								/>

								<Input
									placeholder="State"
									error={errors.addresses?.[index]?.state?.message}
									{...register(`addresses.${index}.state`)}
								/>

								<Input
									placeholder="Zipcode"
									error={errors.addresses?.[index]?.zipcode?.message}
									{...register(`addresses.${index}.zipcode`)}
								/>
							</Fragment>
						);
					})}
				</S.InputWrapper>
			</S.InputGroupContent>

			<S.InputGroupFooter>
				<S.AddPhoneButton
					type="button"
					onClick={() => addresses.append({ city: "", state: "", street: "", zipcode: "" })}
				>
					<BsPlus size={16} />
					Add address
				</S.AddPhoneButton>
			</S.InputGroupFooter>
		</S.InputGroup>
	);
};