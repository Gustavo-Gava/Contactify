import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

import * as S from "./styles";

const schema = yup.object().shape({
	howManyAddress: yup.string(),
	howManyPhoneNumbers: yup.string().notRequired(),
});

type FormData = yup.InferType<typeof schema>;

interface FiltersProps {
	setFilter: (filter: string[] | undefined) => void;
	refetch: () => void;
}

export const Filters = ({ setFilter, refetch }: FiltersProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const [isExpanded, setIsExpanded] = useState(false);

	const toggleIsExpanded = () => setIsExpanded(!isExpanded);

	console.log(errors);

	function onSubmit(data: FormData) {
		console.log(data);
		const addressFilter = `addresses.length=${data.howManyAddress}`;
		const phoneFilter = `phones.length=${data.howManyPhoneNumbers}`;
		const filterArray = [addressFilter, phoneFilter];

		setIsExpanded(false);
		setFilter(filterArray);
		refetch();
	}

	function handleClearFilters() {
		setFilter(undefined);
		setIsExpanded(false);
		reset();
		refetch();
	}

	return (
		<S.Container>
			<S.Title>
				Filters
				<button onClick={toggleIsExpanded}>
					<S.ChevronIcon $isExpanded={isExpanded} />
				</button>
			</S.Title>

			<S.FilterContainer $isExpanded={isExpanded} onSubmit={handleSubmit(onSubmit)}>
				<S.FilterOptionWrapper>
					<Input
						label="How many address?"
						{...register("howManyAddress")}
						error={errors.howManyAddress?.message}
					/>
				</S.FilterOptionWrapper>

				<S.FilterOptionWrapper>
					<Input
						label="How many phone numbers?"
						{...register("howManyPhoneNumbers")}
						error={errors.howManyPhoneNumbers?.message}
					/>
				</S.FilterOptionWrapper>

				<Button>Save</Button>

				<Button type="button" action="danger" onClick={handleClearFilters}>
					Clear filters
				</Button>
			</S.FilterContainer>
		</S.Container>
	);
};
