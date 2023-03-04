import { renderWithTheme } from '../../utils/testing';
import App from '.';
import { cleanup, screen, waitFor } from '@testing-library/react';
import * as functions from '../../utils/functions';

describe('App', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shuffleNumberMock = jest.spyOn(functions, 'shuffleNumber');
  const sortNumberMock = jest.spyOn(functions, 'sortNumber');

  beforeEach(() => {
    shuffleNumberMock.mockReturnValueOnce(numbers)
    sortNumberMock.mockReturnValueOnce(numbers)
    renderWithTheme(<App />);
  })

  afterEach(() => {
    cleanup();
  })

  test('should render the header', () => {
    const headerElement = screen.getByTestId('Header');
    expect(headerElement).toBeInTheDocument();
  })

  test('should render the footer', () => {
    const footerElement = screen.getByTestId('Footer');
    expect(footerElement).toBeInTheDocument();
  })

  test('should render the text footer', () => {
    const footerElement = screen.getByText('Shuffle & sort by Jeremias Jalil');
    expect(footerElement).toBeInTheDocument();
  })

  test('should render the controls', () => {
    const controlsElement = screen.getByTestId('Controls');
    expect(controlsElement).toBeInTheDocument();
  })

  test('should call the shuffle function when the shuffle button is clicked', async () => {
    const shuffleButton = screen.getByText('Shuffle');
    await waitFor(() => shuffleButton.click())
    expect(shuffleNumberMock).toHaveBeenCalled();
  })

  test('should call the sort function when the sort button is clicked', async () => {
    const sortButton = screen.getByText('Sort');
    await waitFor(() => sortButton.click())
    expect(sortNumberMock).toHaveBeenCalled();
  })

  test('should render the number container', () => {
    const numberContainerElement = screen.getByTestId('NumberContainer');
    expect(numberContainerElement).toBeInTheDocument();
  })



})


