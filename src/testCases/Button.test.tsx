import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/common/Button';

test('renders button with correct text', () => {
  render(<Button className="test-button" text="Click Button" />);
  const buttonElement = screen.getByText(/Click button/i);
  expect(buttonElement).toBeInTheDocument();
  screen.debug();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button className="test-button" text="Click me" onClick={handleClick} />);
  const buttonElement = screen.getByText(/Click me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
  screen.debug();
});

test('has correct className prop', () => {
  render(<Button className="test-button" text="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toHaveClass('test-button');
  screen.debug();
});

test('renders button without onClick handler', () => {
  render(<Button className="test-button" text="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
  screen.debug();
});
