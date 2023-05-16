import { BsChevronDown } from "react-icons/bs";
import styled, { css } from "styled-components";
import { Input } from "../ui/Input";

interface FilterContainerProps {
	isExpanded: boolean;
}

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 12px 2px;
	gap: 12px;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;

	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const FilterContainer = styled.form<FilterContainerProps>`
	display: flex;
	flex-direction: column;
	gap: 16px;
	transition: all 0.3s;
	overflow: hidden;

	${({ isExpanded }) =>
		isExpanded
			? css`
					transition: all 0.3s;
					max-height: 300px;
					height: auto;
			  `
			: css`
					max-height: 0;
			  `}
`;

export const ChevronIcon = styled(BsChevronDown)<FilterContainerProps>`
	transition: all 0.3s;
	width: 24px;
	height: 24px;

	${({ isExpanded }) =>
		isExpanded
			? css`
					transform: rotate(180deg);
			  `
			: css`
					transform: rotate(0deg);
			  `}
`;

export const FilterOptionTitle = styled.span``;

export const FilterOptionWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const FilterOption = styled(Input)`
	width: 38px;
	height: 24px;

	border: 1px solid ${({ theme }) => theme.colors.primary.main};
	background-color: transparent;
	border-radius: 6px;
`;
