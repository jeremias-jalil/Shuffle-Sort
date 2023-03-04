import { renderWithTheme } from '../../utils/testing';
import NumberContainer from '.';
import { cleanup, screen } from '@testing-library/react';

describe('NumberContainer', () => {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    beforeEach(() => {
        renderWithTheme(<NumberContainer numberList={numbers} />);
    })

    afterEach(() => {
        cleanup();
    })

    test('should render the numbers', () => {
        numbers.forEach(number => {
            const textElement = screen.getByText(number);
            expect(textElement).toBeInTheDocument();
        })
    })


})