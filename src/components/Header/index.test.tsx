import { renderWithTheme } from '../../utils/testing';
import Header from '.';
import { cleanup, screen } from '@testing-library/react';
import 'jest-styled-components'

describe('Header', () => {
    beforeEach(() => {
        renderWithTheme(<Header />);
    })

    afterEach(() => {
        cleanup();
    })

    test('should render the header', () => {
        const textElement = screen.getByText("Shuffle & sort");
        expect(textElement).toBeInTheDocument();
    })

    test('should render the "/" character with the correct color', () => {
        const textElement = screen.getByText("/");
        expect(textElement).toHaveStyleRule('color', '#DE7064');
    })
})

