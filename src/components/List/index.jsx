import { Container, ListSeparator, Title, FlatList, Header } from "./styles"

export default function List({ title, height, ...props }) {
    return (
        <Container height={height}>
            {
                title &&
                <Header>
                    <Title>{title}</Title>
                </Header>
            }
            <FlatList
                ItemSeparatorComponent={() => <ListSeparator />}
                {...props}
            />
        </Container>
    )
}