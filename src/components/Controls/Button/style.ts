import { mobile } from '../../../style/viewport';
import styled from 'styled-components';

export const ButtonWraper = styled.button`
    text-align: start;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    padding: 1.25rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    cursor: pointer;
    transition: all 0.8s ease;

    &:hover {
      background-color:${({ theme }) => theme.colors.hoverButton}
    }

    ${mobile}  {
      width: auto;
      border: none;
    }
`
export const ButtonText = styled.span`
margin-left: 1rem;
${mobile}  {
    display: none;
  }

`