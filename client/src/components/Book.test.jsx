import { render, screen } from '@testing-library/react';
import Book from './Book';

test('renders basic book info', () => {
  const book = {
    title: 'Liian myöhään vesipääsky',
    seriesNumber: 1,
    originalTitle: 'Too Late the Phalarope',
    originalPublishedYear: 1953,
  };

  render(<Book book={book} />);

  const element = screen.getByText(
    'Liian myöhään vesipääsky (Too Late the Phalarope, 1953)'
  );
  expect(element).toBeDefined();
});
