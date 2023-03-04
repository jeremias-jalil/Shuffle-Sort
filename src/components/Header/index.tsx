import React from 'react'
import { ColorText, Container, HeaderText } from './style'

function Header() {
    return (
        <Container data-testid="Header">
            <HeaderText>
                {'{'}
                <b>Shuffle & sort</b>
                <ColorText>
                    {'/'}
                </ColorText>
                {'}'}
            </HeaderText>
        </Container>
    )
}

export default Header

