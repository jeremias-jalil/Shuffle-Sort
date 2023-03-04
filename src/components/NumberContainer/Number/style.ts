import { Theme } from '../../../style/theme';
import { mobile } from '../../../style/viewport';
import styled from 'styled-components';

const colorSelector = (theme: Theme, odd: boolean) => odd ? theme.colors.primary : theme.colors.dark

export const NumberContainer = styled.div<{ odd: boolean }>`
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3rem;
    background-color:  ${({ theme, odd }) => colorSelector(theme, odd)};
    transition: all 0.8s ease;

    ${mobile} {
        background-color: ${({ theme }) => theme.colors.white};
        color:  ${({ theme, odd }) => colorSelector(theme, odd)};
        position: relative;
        border-left: 0.625rem solid ${({ theme, odd }) => colorSelector(theme, odd)};;
    }
`;
