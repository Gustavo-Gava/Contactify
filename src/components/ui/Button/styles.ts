import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.primary.main};

  border-radius: 4px;
`