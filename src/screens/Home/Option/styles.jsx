import styled from "styled-components/native"

export const Dot = styled.View`
	width: 80px;
  	height: 80px;
	margin-bottom: 6px;
  	border-radius: 50px;
  	justify-content: center;
  	align-items: center;
	background-color: ${({ theme }) => theme.colors.backgroundDot};
`

export const Title = styled.Text`
	font-family: "regular";
  	text-align: center;
	text-transform: capitalize;
`