import { Container, ListSeparator, Title, FlatList, Header } from "./styles"

export default function List({ title, ...props }) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
            </Header>
            <FlatList
                ItemSeparatorComponent={() => <ListSeparator />}
                {...props}
            />
        </Container>
    )
}