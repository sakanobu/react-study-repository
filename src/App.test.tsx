import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';

test('App', () => {
  render(<App />);

  screen.debug();

  // https://github.com/testing-library/jest-dom

  expect(screen.getByRole('button')).toHaveAttribute('type', 'button');

  expect(screen.getByRole('button')).toHaveTextContent('カウント');

  // expect(screen.getByText(/0/)).toHaveTextContent('0');

  const div0 = screen.getByText(/0/);

  expect(div0).toHaveTextContent('0');
});
