import styled from "styled-components";

interface InputWrapperProps {
	error?: boolean;
}

export const Container = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
	display: flex;

	border-bottom: 1px solid
		${({ error, theme }) => (error ? theme.colors.actions.error : "#60606040")};
`;

export const Label = styled.label`
	font-size: ${({ theme }) => theme.fonts.size.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Input = styled.input`
	background-color: transparent;
	border: none;
	flex: 1;
	padding: 4px;

	font-size: ${({ theme }) => theme.fonts.size.sm};
`;

export const RemoveButton = styled.button`
	background-color: transparent;
	border: none;

	svg {
		color: ${({ theme }) => theme.colors.actions.error};
	}
`;

export const Error = styled.span`
	color: ${({ theme }) => theme.colors.actions.error};
	font-size: ${({ theme }) => theme.fonts.size.xs};
	margin-left: 2px;
	margin-top: 2px;
`;
