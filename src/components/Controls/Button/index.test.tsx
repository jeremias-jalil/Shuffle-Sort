import { renderWithTheme } from '../../../utils/testing';
import Button from '.';
import { cleanup, screen } from '@testing-library/react';

describe('Button', () => {

    const onClick = jest.fn();
    const titleTest = 'titleTest'

    beforeEach(() => {
        renderWithTheme(<Button icon="icon" title={titleTest} onClick={onClick} />);
    })

    afterEach(() => {
        cleanup();
    })

    test('should render title text correctly', () => {
        const title = screen.getByText(titleTest);
        expect(title).toBeInTheDocument();
    });

    test('should render icon correctly', () => {
        const icon = screen.getByRole('img', { name: titleTest });
        expect(icon).toBeInTheDocument();
    });

    test('should call onClick function when clicked', () => {
        const button = screen.getByRole('button', { name: titleTest });
        button.click();
        expect(onClick).toHaveBeenCalled();
    });


})