import { shallow } from 'enzyme';
import React from 'react';
import { render } from 'react-native-testing-library';
import App from '../App';

describe('Test App Screen: ', () => {
  const wrapper = shallow(<App />);
  const { getByText } = render(<App />);

  it('should render a <View />', () => {
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('should render a Welcome!', () => expect(getByText(/welcome/i)).toBeDefined())
})
