import { mobile } from '../../style/viewport';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20.68rem;
    height: 36.87rem;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 0 2rem 2rem 0;

    ${mobile} {
        background-color: ${({ theme }) => theme.colors.light};
        width: 100%;
        padding: 2rem;
        height: auto;
        flex-direction: row;
        align-items: center;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 0.75rem;
    ${mobile} {
        flex-direction: row;
        width: 100%;
        border: none;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: end;

    path{
        fill: ${({ theme }) => theme.colors.white};
    }
    
    ${mobile} {
        path{
            fill: ${({ theme }) => theme.colors.dark};
        }
    }

`