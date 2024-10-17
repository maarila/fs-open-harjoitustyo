import { render, screen } from '@testing-library/react';
import Book from './Book';

test('renders basic book info', () => {
  const testBook = {
    title: 'Liian myöhään vesipääsky',
    seriesNumber: 1,
    originalTitle: 'Too Late the Phalarope',
    originalPublishedYear: 1953,
  };

  render(<Book book={testBook} />);

  const element = screen.getByText(
    '1. Liian myöhään vesipääsky'
  );
  expect(element).toBeDefined();
});
