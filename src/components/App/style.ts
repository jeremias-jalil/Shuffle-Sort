import { mobile } from '../../style/viewport';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.light};
    border-top: ${({ theme }) => theme.colors.dark} 0.625rem solid;
        
    ${mobile} {
        height: auto;
        width: 100%;
    }
`

export const AppContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${mobile} {
        flex-direction: column-reverse;
        width: 100%;
    }
`

export const HeaderContainer = styled.div`
   ${mobile} {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.dark};
    }
`

export const FooterContainer = styled.div`
`