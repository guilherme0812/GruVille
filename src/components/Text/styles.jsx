import styled from "styled-components/native"

export const TextComponent = styled.Text`
    font-family: "regular";
    font-size: 16px;
    color: ${({theme}) => theme.colors.text}
`