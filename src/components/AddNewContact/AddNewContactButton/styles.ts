import styled from "styled-components";
import { Button } from "../../ui/Button";

export const Container = styled(Button)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 8px;
	right: 8px;

	width: fit-content;

	background-color: ${({ theme }) => theme.colors.primary.main};
	border-radius: 6px;
	padding: 8px;
`;
