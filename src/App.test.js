import { render, screen } from '@testing-library/react';
import App from './App';
import Test from "./test";

test('renders learn react link', () => {
  render(<App />,<Test/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
