import styled from "styled-components";
import { Button } from "../ui/Button";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
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

export const CloseButton = styled.button`
	cursor: pointer;
`;

export const DeleteUserButton = styled(Button)`
	background-color: ${({ theme }) => theme.colors.actions.error};
`;

export const ConfirmDelete = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 6px;

	p {
		font-size: ${({ theme }) => theme.fonts.size.base};
		font-weight: ${({ theme }) => theme.fonts.weight.medium};
	}
`;

export const ConfirmDeleteButtons = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 8px;
`;
