import { renderWithTheme } from '../../utils/testing';
import Controls from '.';
import { cleanup, screen } from '@testing-library/react';

describe('Controls', () => {
    const handleShuffle = jest.fn();
    const handleSort = jest.fn();

    beforeEach(() => {
        renderWithTheme(<Controls handleShuffle={handleShuffle} handleSort={handleSort} />);
    })

    afterEach(() => {
        cleanup();
    })

    test('should render shuffle button correctly', () => {
        const button = screen.getByRole('button', { name: 'Shuffle' });
        expect(button).toBeInTheDocument();
    });

    test('should render sort button correctly', () => {
        const button = screen.getByRole('button', { name: 'Sort' });
        expect(button).toBeInTheDocument();
    });

    test('should call handleShuffle function when shuffle button clicked', () => {
        const button = screen.getByRole('button', { name: 'Shuffle' });
        button.click();
        expect(handleShuffle).toHaveBeenCalled();
    });

    test('should call handleSort function when sort button clicked', () => {
        const button = screen.getByRole('button', { name: 'Sort' });
        button.click();
        expect(handleSort).toHaveBeenCalled();
    });

})