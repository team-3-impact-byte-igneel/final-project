import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuoteBox from './App';

it('renders without crashing', () => {
  const div = document.createElement('quote-boxes');
  ReactDOM.render(<QuoteBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
