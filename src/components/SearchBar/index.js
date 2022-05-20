import React from "react"

import { Container, InputIcon, TextInput } from "./styles.js"

export default function SearchBar(props) {
    return (
        <Container>
            <InputIcon name="search" />
            <TextInput returnKeyType="search" {...props} />
        </Container>
    )
}