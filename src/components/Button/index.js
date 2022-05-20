import { Container, Title } from "./styles.js"

export default function Button({ title, ...props }) {
    return (
        <Container {...props}>
            <Title>{title}</Title>
        </Container>
    )
}