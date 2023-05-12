import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  position: fixed;
  bottom: 8px;
  right: 8px;

  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 6px;
  padding: 8px;
`