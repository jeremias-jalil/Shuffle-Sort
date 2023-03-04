import React from 'react'
import { Container } from './style'
import Number from './Number'

type Props = {
    numberList: number[]
}

function NumberContainer({ numberList }: Props) {
    return (
        <Container data-testid='NumberContainer' >
            {numberList.map((number, index) => (
                <Number key={index} value={number} />))}
        </Container>
    )
}

export default NumberContainer