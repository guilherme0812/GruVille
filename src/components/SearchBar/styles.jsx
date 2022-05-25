import styled from "styled-components/native"
import Icon from "../Icon"

export const Container = styled.View`
    width: 100%;
    height: 50px;
    padding: 0px ${({ theme }) => theme.metrics.padding}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ theme }) => theme.colors.card};
`

export const Text = styled.Text`
    font-size: 16px;
`

export const InputIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.textAlt};
`

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
    selectionColor: theme.colors.primary
}))`
    width: 100%;
    height: 100%;
    padding-left: ${({ theme }) => theme.metrics.padding}px;
`