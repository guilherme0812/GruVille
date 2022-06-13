import styled from "styled-components/native"

export const TextComponent = styled.Text.attrs(() => ({
    numberOfLines: 1,
    ellipsizeMode: "tail"
}))`
    font-family: "regular";
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text}
`