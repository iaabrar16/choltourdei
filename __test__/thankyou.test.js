import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThankYou from '../frontend/src/pages/ThankYou';

describe('ThankYou Component', () => {
  it('renders Thank You message and Back To Home link', () => {
    render(
      <BrowserRouter>
        <ThankYou />
      </BrowserRouter>
    );

    const thankYouMessage = screen.getByText('Thank You.');
    expect(thankYouMessage).toBeInTheDocument();

    const bookedMessage = screen.getByText('Your Tour Is Booked');
    expect(bookedMessage).toBeInTheDocument();
   
    const backToHomeLink = screen.getByRole('link', { name: 'Back To Home.' });
    expect(backToHomeLink).toBeInTheDocument();
    expect(backToHomeLink.getAttribute('href')).toBe('/home');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ThankYou />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
