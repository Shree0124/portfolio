import React from "react";
import { render, screen } from '@testing-library/react';

const Home = () => <div>Welcome to my portfolio</div>;

test('renders homepage', () => {
  render(<Home />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
