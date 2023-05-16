import { InputHTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";

import * as S from "./styles";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	setSearch: (value: string) => void;
}

export const SearchInput = ({ setSearch, ...rest }: SearchInputProps) => {
	return (
		<S.Container>
			<label htmlFor="search">
				<BsSearch />
			</label>

			<S.Input
				id="search"
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search"
				{...rest}
			/>
		</S.Container>
	);
};
