import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
describe('<About />', () => {
  it('renders without crashing', () => {
    shallow(<About />);
  });
});
