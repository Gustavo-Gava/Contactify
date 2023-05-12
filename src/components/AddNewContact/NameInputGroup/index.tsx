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

				<Input label="name" placeholder="Name" error={errors.name?.message} {...register("name")} />
			</S.InputGroupContent>
		</S.InputGroup>
	);
};
