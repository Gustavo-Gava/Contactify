import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: auto;
	min-height: 100vh;

	display: flex;
	flex-direction: column;

	padding: 24px 0;
	gap: 24px;

	background-color: ${({ theme }) => theme.colors.system.background};
`;

export const Header = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;

	padding: 0 16px;

	@media (min-width: 768px) {
		max-width: 768px;
		margin: 0 auto;
	}
`;

export const Title = styled.h1`
	width: fit-content;
	position: relative;
	font-size: ${({ theme }) => theme.fonts.size.xl};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};

	&::after {
		content: "";
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 110%;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.primary.main};
		border-radius: 6px;
	}
`;

export const Main = styled.main`
	position: relative;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.system.background};
	padding: 0 16px;

	@media (min-width: 768px) {
		max-width: 768px;
		margin: 0 auto;
	}
`;

export const ContactsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const ContactsGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 24px 12px;
	border-radius: 6px;

	background-color: ${({ theme }) => theme.colors.system.surface};
`;

export const HeaderRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;

	svg {
		color: ${({ theme }) => theme.colors.primary.main};
	}

	.react-select-container {
		svg {
			background-color: ${({ theme }) => theme.colors.primary.main};
			border-radius: 50%;
			color: #fff;
			width: 28px;
			height: 28px;
			padding: 4px;

			margin-right: 2px;
		}

		.react-select__indicator {
			display: none;
		}

		.react-select__menu {
			width: auto;
			overflow: hidden;
		}
	}
`;

export const Letter = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	width: fit-content;
	padding: 8px;

	font-size: ${({ theme }) => theme.fonts.size.lg};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
	background-color: ${({ theme }) => theme.colors.primary.main};

	margin: 10px 0;
`;
