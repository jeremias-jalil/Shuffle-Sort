import { mobile } from '../../style/viewport';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 2rem;
    width: 36.87rem;
    height: 36.87rem;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0.25rem 2rem rgba(47, 47, 47, 0.2);
    border-radius: 2rem 0 0 2rem;

    ${mobile} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding: 0 2rem;
        background-color: ${({ theme }) => theme.colors.light};
        box-shadow: none;
        border-radius: 0;
    }
`