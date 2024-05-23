import { render, screen, fireEvent } from '@testing-library/react';
import Usluggi from './Usluggi';

test('renders Usluggi component', () => {
  render(<Usluggi />);
  const textElement = screen.getByText('НАШИ УСЛУГИ', { exact: false });
  expect(textElement).toBeInTheDocument();
});

test('modal opens when "ЗАПИСАТЬСЯ" button is clicked', () => {
  render(<Usluggi />);
  const button = screen.getByText('ЗАПИСАТЬСЯ');
  fireEvent.click(button);
  const modalElement = screen.getAllByRole('dialog')[0];
  expect(modalElement).toBeInTheDocument();
});

test('Name and Email input fields are rendered in modal', () => {
  render(<Usluggi />);
  const button = screen.getByText('ЗАПИСАТЬСЯ');
  fireEvent.click(button);
  const nameInput = screen.getByPlaceholderText('Имя');
  const emailInput = screen.getByPlaceholderText('Email');
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});