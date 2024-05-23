import React from 'react';
import { shallow } from 'enzyme';
import Aboutt from './Aboutt';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';

describe('Aboutt Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Aboutt />);
  });

  it('renders the Aboutt component', () => {
    expect(wrapper.find('.App').exists()).toBe(true);
  });

  it('renders the AboutUs component', () => {
    expect(wrapper.find(AboutUs).exists()).toBe(true);
  });

  it('contains Link to "/concerts"', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/concerts');
  });

  it('contains Link to "/uslugi"', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/uslugi');
  });
});

