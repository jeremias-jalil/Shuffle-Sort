import React from 'react'
import { Container, FooterText } from './style'

type Props = {
    text: string
}

function Footer({ text }: Props) {
    return (
        <Container data-testid="Footer">
            <FooterText>{text}</FooterText>
        </Container>
    )
}

export default Footer