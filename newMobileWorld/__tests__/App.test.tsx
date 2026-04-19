import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import App from '../src/app/App';

describe('App', () => {
  it('renders without crashing', () => {
    ReactTestRenderer.create(<App />);
  });
});
