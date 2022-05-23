import { Container, ListSeparator, Tilte, FlatList, Header } from "./styles"

export default function List({ title, ...props }) {
    return (
        <Container>
            <Header>
                <Tilte>{title}</Tilte>
            </Header>
            <FlatList
                ItemSeparatorComponent={() => <ListSeparator />}
                {...props}
            />
        </Container>
    )
}