import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;

	gap: 16px;
	width: 100%;
	padding-bottom: 12px;

	border-bottom: 1px solid rgba(100, 100, 100, 0.3);

	&:last-child {
		border-bottom: none;
	}
`;

export const Avatar = styled.img`
	border-radius: 50%;
	width: 70px;
	height: 70px;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
`;

export const Name = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.lg};
	font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const Phone = styled.span`
	font-size: ${({ theme }) => theme.fonts.size.sm};
`;

export const Actions = styled.div`
	margin-left: auto;
`;

export const Action = styled.button``;
