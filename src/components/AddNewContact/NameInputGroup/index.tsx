import { BsPerson } from "react-icons/bs";
import { useFormContext } from "react-hook-form";

import { Input } from "../../ui/Input";
import { NewContactFormData } from "..";

import * as S from "../styles";

export const NameInputGroup = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<NewContactFormData>();

	return (
		<S.InputGroup>
			<S.InputGroupContent>
				<BsPerson size={16} />

				<S.InputWrapper>
					<Input placeholder="Name" error={errors.name?.message} {...register("name")} />

					<Input
						placeholder="Category"
						error={errors.category?.message}
						{...register("category")}
					/>
				</S.InputWrapper>
			</S.InputGroupContent>
		</S.InputGroup>
	);
};
