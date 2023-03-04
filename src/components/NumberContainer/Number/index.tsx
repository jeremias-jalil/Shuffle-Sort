import { NumberContainer } from './style'

type Props = {
    value: number
}

function Number({ value }: Props) {
    const isOdd = value % 2 !== 0
    return (
        <NumberContainer odd={isOdd}>
            {value}
        </NumberContainer>
    )
}

export default Number