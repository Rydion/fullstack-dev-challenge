import React from 'react';
import { shallow } from 'enzyme';
import CurrencyInput from './CurrencyInput';

describe('CurrencyInput', function () {
    it('renders without crashing', () => {
        // For components we render only the component itself
        const currencyInputComponent = shallow(<CurrencyInput />);
    });
    
    it('has a default value of 0', () => {
        const currencyInputComponent = shallow(<CurrencyInput />);
        expect(currencyInputComponent.state().value).toEqual(0);
    });

    it('the default value can be changed by using the initialValue property', () => {
        const currencyInputComponent = shallow(<CurrencyInput defaultValue={10} />);
        expect(currencyInputComponent.state().value).toEqual(10);
    });
});
