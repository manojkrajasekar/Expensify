import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import NotFoundPage from '../../components/NotFoundPage';

test('should render Header correctly', () => {
  const wrapper = new shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

