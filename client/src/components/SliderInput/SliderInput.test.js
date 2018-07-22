import React from 'react';
import { shallow } from 'enzyme';
import SliderInput from './SliderInput';

describe('SliderInput', function () {
    it('renders without crashing', () => {
        // For components we render only the component itself
        const currencyInputComponent = shallow(<SliderInput />);
    });
    
    it('has a default value of 0', () => {
        const sliderInputComponent = shallow(<SliderInput />);
        expect(sliderInputComponent.state().value).toEqual(0);
    });

    it('the default value can be changed by using the initialValue property', () => {
        const sliderInputComponent = shallow(<SliderInput defaultValue={10} />);
        expect(sliderInputComponent.state().value).toEqual(10);
    });

    it('the value is updated correctly onChange', () => {
        const sliderInputComponent = shallow(<SliderInput />);
        sliderInputComponent.find('input').simulate('change', { target: { value: 10 } });
        expect(sliderInputComponent.state().value).toEqual(10);
    });
});
