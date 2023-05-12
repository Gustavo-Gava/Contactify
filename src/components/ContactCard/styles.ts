import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;
  width: 100%;

  margin-bottom: 20px;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`

export const Phone = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.sm};
`

export const Actions = styled.div`
  margin-left: auto;
`

export const Action = styled.button``