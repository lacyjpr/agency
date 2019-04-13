import React from 'react';
import { shallow } from 'enzyme';
import Users from './Users';
describe('<Users />', () => {
  it('renders without crashing', () => {
    shallow(<Users />);
  });
});
