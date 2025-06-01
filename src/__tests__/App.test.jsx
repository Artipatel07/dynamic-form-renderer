import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extra matchers
import App from '../App';

test('renders the form and submits data', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name/i);
  const submitButton = screen.getByText(/submit/i);

  fireEvent.change(nameInput, { target: { value: 'Arti Patel' } });
  fireEvent.click(submitButton);

  expect(screen.getByText(/Arti Patel/)).toBeInTheDocument();
});
