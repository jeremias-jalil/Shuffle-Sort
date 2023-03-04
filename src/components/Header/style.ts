import { mobile } from '../../style/viewport';
import styled from 'styled-components';

export const Container = styled.div`
    width: 57.55rem;
    padding: 1rem;
    ${mobile} {
        width: 100%;
        
    }
`

export const HeaderText = styled.h1`
    font-size: 2rem;
    line-height: 2.43rem;
    color: ${({ theme }) => theme.colors.dark};
    ${mobile} {
        color: ${({ theme }) => theme.colors.white};
    }
`

export const ColorText = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`