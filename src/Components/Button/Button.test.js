import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders a given text prop', () => {
    const button = shallow(<Button text='some test text' />);

    expect(button.text()).toEqual('some test text');
  });

  it('executes a given onclick function on click', () => {
    const buttonClick = sinon.spy(() => 'test');
    const button = mount(<Button onClick={buttonClick} />);

    button.simulate('click');

    expect(buttonClick.calledOnce).toEqual(true);
    expect(buttonClick.firstCall.returnValue).toEqual('test');
  });

  it('renders disabled given a true disabled prop', () => {
    const button = mount(<Button text='DISABLED' disabled={true} />);

    expect(button.text()).toEqual('DISABLED');
    expect(button.props().disabled).toEqual(true);
  });

  it('renders with correct default props', () => {
    const button = shallow(<Button />);

    expect(button.props()).toEqual({
      onClick: undefined,
      children: 'UNDEFINED BUTTON' // children = button text
    });
  });
});

