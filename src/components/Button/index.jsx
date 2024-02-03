/* eslint-disable react/prop-types */
import { Container } from './Styles'

export function Button({ title }) {
    return (
        <Container type='button'>
            {title}
        </Container>
    )
}
