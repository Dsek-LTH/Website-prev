import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});

it('renders a given text prop', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button text="TESTING THE BUTTON" />, div)
  expect()
})
