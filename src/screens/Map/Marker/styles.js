import styled from "styled-components/native";
import { Marker, Callout } from 'react-native-maps';
import { Text } from '../../../components'

export const Container = styled(Callout)`
  padding: ${({ theme }) => theme.metrics.padding}px;
`
export const MarkerContainer = styled(Marker)``


export const Title = styled(Text)`
  font-size: 14px;
  text-align: center;
`