import styled from "styled-components";

interface ContainerProps {
	$action: "success" | "neutral" | "danger";
}

export const Container = styled.button<ContainerProps>`
	width: 100%;

	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	border: 1px solid transparent;

	font-size: ${({ theme }) => theme.fonts.size.base};
	font-weight: ${({ theme }) => theme.fonts.weight.medium};

	background-color: ${({ theme, $action }) =>
		$action === "danger"
			? theme.colors.actions.error
			: $action === "success"
			? theme.colors.actions.success
			: theme.colors.primary.main};

	border-radius: 6px;
	transition: all 0.3s;

	&:hover {
		filter: brightness(0.9);
	}
`;
