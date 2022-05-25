import { Container, Title } from "./styles"

export default function Button({ title, type, ...props }) {
    return (
        <Container type={type} {...props}>
            <Title type={type} >{title}</Title>
        </Container>
    )
}