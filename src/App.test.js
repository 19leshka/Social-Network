import React from 'react';
import ReactDOM from 'react-dom';
import SocialNet from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialNet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
