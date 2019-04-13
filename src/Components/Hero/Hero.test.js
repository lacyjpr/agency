import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';
describe('<Hero />', () => {
  it('renders without crashing', () => {
    shallow(<Hero />);
  });
});
