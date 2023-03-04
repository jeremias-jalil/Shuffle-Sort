import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;

`

export const FooterText = styled.p`
    font-style: italic;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.06rem;
    color: ${({ theme }) => theme.colors.footerText};
`