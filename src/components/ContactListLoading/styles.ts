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

export const SearchInputSkeleton = styled.div`
	width: 100%;
	height: 48px;
	border-radius: 6px;

	position: relative;
	overflow: hidden;
	background: linear-gradient(to right, #303030 0%, #101010 50%, #303030 100%);
	background-size: 200% 100%;
	animation: shimmer 2s infinite;
`;

export const ContactsGroupSkeleton = styled.div`
	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}

		100% {
			background-position: 200% 0;
		}
	}

	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 24px 12px;
	border-radius: 6px;
	height: 300px;

	position: relative;
	overflow: hidden;
	background: linear-gradient(to right, #303030 0%, #101010 50%, #303030 100%);
	background-size: 200% 100%;
	animation: shimmer 2s infinite;

	margin-bottom: 24px;

	background-color: ${({ theme }) => theme.colors.system.surface};
`;

export const ContactsGroupSkeletonItem = styled.div`
	width: 100%;
	height: 48px;
	background-color: ${({ theme }) => theme.colors.system.surface};
	border-bottom: 1px solid #505050ee;

	position: relative;
	overflow: hidden;
	background: linear-gradient(to right, #303030 0%, #101010 50%, #303030 100%);
	background-size: 200% 100%;
	animation: shimmer 2s infinite;
`;
