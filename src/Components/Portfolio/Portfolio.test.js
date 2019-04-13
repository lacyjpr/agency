import React from 'react';
import { shallow } from 'enzyme';
import Portfolio from './Portfolio';
describe('<Portfolio />', () => {
  it('renders without crashing', () => {
    shallow(<Portfolio />);
  });
});
