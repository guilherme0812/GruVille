import styled from "styled-components/native"
import { Text } from "../../../components"

export const Container = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`

export const Dot = styled.View`
	width: 80px;
  	height: 80px;
	margin-bottom: 6px;
  	border-radius: 50px;
	display: flex;
  	justify-content: center;
  	align-items: center;
	background-color: ${({ theme }) => theme.colors.backgroundDot};
`

export const DotImage = styled.Image`
	width: 40px;
	height: 40px;
`

export const Title = styled(Text)`
	font-family: "regular";
  	text-align: center;
	text-transform: capitalize;
`