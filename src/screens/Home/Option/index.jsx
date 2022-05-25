import React from 'react';
import {Image, Text} from 'react-native'
import { Container, Dot, Title } from './styles';

const Option = ({text, source}) => {
  console.log(source)
  return (
    <Container>
      <Dot>
        <Image/>
      </Dot>
      <Title>{text}</Title>
    </Container>
  )
}
export default Option