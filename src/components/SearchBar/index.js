import React from "react"

import { Container, InputIcon, TextInput } from "./styles.js"

export default function SearchBar(props) {
    return (
        <Container>
            <InputIcon name="search" returnKeyType="search" />
            <TextInput {...props} />
        </Container>
    )
}