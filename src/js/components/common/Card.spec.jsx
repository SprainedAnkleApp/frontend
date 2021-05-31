import Card from './Card';
import { render } from '@testing-library/react';
import React from 'react';

const mockChildren = <div>Test</div>;

describe('Card', () => {
  it('Should render card with correct styles', () => {
    const mockParams = { children: mockChildren };
    const { container } = render(
      <Card.Card {...mockParams}>{mockChildren}</Card.Card>
    );

    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild.className).toEqual('card');
  });

  it('Should render children properly', () => {
    const mockParams = { children: mockChildren };
    const { queryByText } = render(
      <Card.Card {...mockParams}>{mockChildren}</Card.Card>
    );

    expect(queryByText('Test')).not.toBeNull();
  });

  it('Should apply external class properly', () => {
    const mockParams = { children: mockChildren, className: 'external' };
    const { container } = render(
      <Card.Card {...mockParams}>{mockChildren}</Card.Card>
    );

    expect(container.firstChild.className).toContain('external');
  });
});
