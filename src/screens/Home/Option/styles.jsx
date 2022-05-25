import styled from "styled-components/native";

export const Container = styled.View`
  margin-right: ${({theme}) => theme.metrics.padding}px;
  margin-bottom: ${({theme}) => theme.metrics.padding}px;
`

export const Dot = styled.TouchableOpacity`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundDot};
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: "medium";
  text-align: center;
`