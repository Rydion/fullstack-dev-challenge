import React from 'react';
import { shallow } from 'enzyme';
import CurrencyInput from './CurrencyInput';

describe('CurrencyInput', () => {
    it('renders without crashing', () => {
        // For components we render only the component itself
        const currencyInputComponent = shallow(<CurrencyInput />);
    });
    
    it('has a default value of 0', () => {
        const currencyInputComponent = shallow(<CurrencyInput />);
        expect(currencyInputComponent.state().value).toEqual(0);
    });

    it('the default value can be changed by using the defaultValue property', () => {
        const currencyInputComponent = shallow(<CurrencyInput defaultValue={10} />);
        expect(currencyInputComponent.state().value).toEqual(10);
    });

    it('the value is updated correctly onChange', () => {
        const currencyInputComponent = shallow(<CurrencyInput />);
        currencyInputComponent.find('input').simulate('change', { target: { value: 10 }});
        expect(currencyInputComponent.state().value).toEqual(10);
    });

    it('the onUpdate callback is correctly executed', () => {
        const stub = jest.fn();
        const currencyInputComponent = shallow(<CurrencyInput propName={'test'} onUpdate={stub} />);
        currencyInputComponent.find('input').simulate('change', { target: { value: 10 } });
        expect(stub).toHaveBeenCalledWith('test', 10);
    });
});
