import { ButtonText, ButtonWraper } from './style'

type Props = {
    icon: string
    title: string
    onClick: () => void
}

function Button({ icon, title, onClick }: Props) {
    return (
        <ButtonWraper onClick={onClick} aria-label={title}>
            <img src={icon} alt={title} />
            <ButtonText>{title}</ButtonText>
        </ButtonWraper>

    )
}

export default Button