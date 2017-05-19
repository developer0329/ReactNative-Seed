import 'react-native';
import React from 'react';

import App from '../src/App';
jest.unmock('Image');

import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
