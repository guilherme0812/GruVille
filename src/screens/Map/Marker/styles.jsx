import styled from "styled-components/native";
import { Text } from '../../../components'

export const Pin = styled.View`
  	width: 50px;
  	height: 50px;
	align-items: center;
	justify-content: center;
  	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	border-width: 4px;
	border-color: ${({ theme }) => theme.colors.primary};
  	background-color: white;
`

export const PinImage = styled.Image`
	width: 40px;
  	height: 40px;
	border-radius: 50px;
`