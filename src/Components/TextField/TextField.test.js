import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';


describe('TextField', () => {
  it('renders without crashing', () => {
    shallow(<TextField />);
  });

  it('renders a given placeholder prop', () => {
    const textfield = shallow(<TextField placeholder='some test text' />);

    expect(textfield.props().placeholder).toEqual('some test text');
  });

  it('renders with correct default props', () => {
    const button = shallow(<TextField />);

    expect(button.props()).toEqual({
      type: 'text',
      placeholder: '',
      disabled: false,
      autofocus: false,
      value: ''
    });
  });
});

