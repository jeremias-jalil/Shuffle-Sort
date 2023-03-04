import { renderWithTheme } from '../../../utils/testing';
import Number from '.';
import { cleanup, screen } from '@testing-library/react';
import 'jest-styled-components'

describe('Number', () => {


    afterEach(() => {
        cleanup();
    })

    test('should render the number', () => {
        const value = 1;
        renderWithTheme(<Number value={1} />)
        const textElement = screen.getByText(value);
        expect(textElement).toBeInTheDocument();
    })

    test('should render the odd number with the correct color', () => {
        const value = 1;
        renderWithTheme(<Number value={1} />)
        const textElement = screen.getByText(value);
        expect(textElement).toHaveStyleRule('background-color', '#DE7064');
    })

    test('should render the even number with the correct color', () => {
        const value = 2;
        renderWithTheme(<Number value={2} />)
        const textElement = screen.getByText(value);
        expect(textElement).toHaveStyleRule('background-color', '#2F2F2F');
    })
})

