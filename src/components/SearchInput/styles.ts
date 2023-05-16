import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 4px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.system.surface};
  border-radius: ${({ theme }) => theme.border.radius.base};
`

export const Input = styled.input`
  display: flex;
  flex: 1;
  background: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }
`