import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons"

export const VectorIcon = styled(Feather)`
    font-size: 24px;
    color: ${({ theme, color }) => color ?? theme.colors.text};
`