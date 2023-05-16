import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 16px;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.colors.system.background};
`;

export const FormHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
`;

export const CloseButton = styled.div`
	cursor: pointer;
`;

export const InputGroup = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	gap: 12px;
	padding: 8px;
	border-radius: 4px;

	background-color: #202020;

	transition: all 0.3s ease;
`;

export const InputGroupHeader = styled.div`
	display: flex;
	gap: 4px;
`;

export const InputGroupContent = styled.div`
	display: flex;
	gap: 4px;

	width: 100%;

	svg {
		margin-top: 4px;
	}
`;

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const InputGroupFooter = styled.div``;

export const AddPhoneButton = styled.button`
	gap: 6px;
	font-size: ${({ theme }) => theme.fonts.size.sm};
	font-weight: ${({ theme }) => theme.fonts.weight.normal};
`;

export const ErrorMessage = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.xs};
	color: ${({ theme }) => theme.colors.actions.error};
`;
