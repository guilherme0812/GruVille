import styled from "styled-components/native"
import Icon from "../Icon"
import TextComponent from '../Text'

export const Container = styled.View`
    width: 100%;
    height: 50px;
    padding: 0px ${({ theme }) => theme.metrics.padding}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: ${({ theme }) => theme.metrics.padding}px;
    background-color: ${({ theme }) => theme.colors.card};
`

export const Text = styled(TextComponent)`
    font-size: 16px;
`

export const InputIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.textAlt};
`

export const ClearButton = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    position: absolute;
    right: ${({ theme }) => theme.metrics.padding}px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const ClearButtonIcon = styled(Icon)`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondaryContrast};
`

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
    selectionColor: theme.colors.primary,
    placeholderTextColor: theme.colors.textAlt
}))`
    width: 80%;
    height: 100%;
    padding-left: ${({ theme }) => theme.metrics.padding}px;
    color: ${({ theme }) => theme.colors.text};
`