import styled from "styled-components";

interface ContainerProps {
	$action: "success" | "neutral" | "danger";
}

export const Container = styled.button<ContainerProps>`
	width: 100%;

	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 4px;

	background-color: ${({ theme, $action }) =>
		$action === "danger"
			? theme.colors.actions.error
			: $action === "success"
			? theme.colors.actions.success
			: theme.colors.primary.main};

	border-radius: 4px;
`;
