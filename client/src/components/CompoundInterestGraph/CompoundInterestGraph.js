import React, { Component } from 'react';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import SliderInput from '../SliderInput/SliderInput';
import DisplayGraph from '../DisplayGraph/DisplayGraph';
import './CompoundInterestGraph.css';

export default class CompoundInterestGraph extends Component {
    calculateInterest() {
        // TODO
    }

	render() {
        return (
            <div>
                <div className="financial-inputs">
                    <p className="input-label">How much have you saved?</p>
                    <CurrencyInput onUpdate={this.calculateInterest} />

                    <p className="input-label">How much will you save each month?</p>
                    <CurrencyInput onUpdate={this.calculateInterest} />

                    <p className="input-label">How much interest will you earn per year?</p>
                    <SliderInput />
                </div>
                <div className="financial-display">
                    {/*We have included some sample data here, you will need to replace this
					    with your own. Feel free to change the data structure if you wish.*/}
                    <DisplayGraph data={[
                        {
                            month: 1,
                            amount: 500
                        },
                        {
                            month: 2,
                            amount: 700
                        },
                        {
                            month: 3,
                            amount: 1000
                        },
                        {
                            month: 4,
                            amount: 1500
                        }
                    ]} />
                </div>
            </div>
        );
	}
}
