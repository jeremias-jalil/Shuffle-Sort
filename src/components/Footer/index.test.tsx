import { renderWithTheme } from '../../utils/testing';
import Footer from '.';
import { cleanup, screen } from '@testing-library/react';

describe('Footer', () => {

    const text = 'text-test'

    beforeEach(() => {
        renderWithTheme(<Footer text={text} />);
    })

    afterEach(() => {
        cleanup();
    })

    test('should render text correctly', () => {
        const textElement = screen.getByText(text);
        expect(textElement).toBeInTheDocument();
    });

})