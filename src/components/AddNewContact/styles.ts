import type { Styles } from "react-modal";
import styled from 'styled-components'

import theme from "../../styles/theme/theme";

export const customStyles = {
	overlay: {
		backgroundColor: theme.colors.modal.overlay,
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
    width: "100%",
    maxWidth: "400px",
    padding: "16px",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "#101010",
    border: "none",
    outline: `1px solid ${theme.colors.primary.main}`,
	},
} as Styles;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const CloseButton = styled.div`
  cursor: pointer;
`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  gap: 12px;
  padding: 8px;
  border-radius: 4px;

  background-color: #202020;

  transition: all 0.3s ease;
`

export const InputGroupHeader = styled.div`
  display: flex;
  gap: 4px;
` 

export const InputGroupContent = styled.div`
  display: flex;
  gap: 4px;

  width: 100%;

  svg {
    margin-top: 4px;
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const InputGroupFooter = styled.div``

export const AddPhoneButton = styled.button`
  gap: 6px;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
`