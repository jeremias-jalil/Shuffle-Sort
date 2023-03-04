import Button from './Button'
import { ButtonContainer, Container, LogoContainer } from './style'
import shuffleIcon from '../../assets/icon-shuffle.svg'
import sortIcon from '../../assets/icon-sort.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'

type Props = {
    handleShuffle: () => void
    handleSort: () => void
}

function Controls({ handleShuffle, handleSort }: Props) {

    return (
        <Container data-testid="Controls">
            <ButtonContainer>
                <Button icon={shuffleIcon} title="Shuffle" onClick={handleShuffle} />
                <Button icon={sortIcon} title="Sort" onClick={handleSort} />
            </ButtonContainer>
            <LogoContainer>
                <Logo role='img' aria-label='kraftvaerk know how to develop' />
            </LogoContainer>
        </Container>
    )
}

export default Controls