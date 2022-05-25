import { Container, Text } from "./styles.js"

export default function Header({ title }) {
    return (
        <Container>
            <Text>
                {title}
            </Text>
        </Container>
    )
}