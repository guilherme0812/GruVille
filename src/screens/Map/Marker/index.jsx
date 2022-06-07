import React from 'react';
import { Container, MarkerContainer, TextContainer, Title, Description } from './styles';

const Marker = ({ title, description, ...props }) => {
  return (
    <MarkerContainer {...props} flipY={true}>
      <Container>
        <Title> {title} </Title>
      </Container>
    </MarkerContainer>
  )
}
export default Marker