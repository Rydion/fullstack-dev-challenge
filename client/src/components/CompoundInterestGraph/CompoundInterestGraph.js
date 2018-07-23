import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import debounce from 'debounce';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import SliderInput from '../SliderInput/SliderInput';
import DisplayGraph from '../DisplayGraph/DisplayGraph';
import RadioSelector from '../RadioSelector/RadioSelector';
import getCompoundInterestQuery from '../../graphql/queries/compoundInterest';
import './CompoundInterestGraph.css';

export default class CompoundInterestGraph extends Component {
    constructor(props) {
        super(props);

        this.interestFrequencyOptions = [{
            label: 'Monthly',
            value: 1
        }, {
            label: 'Quarterly',
            value: 3
        }, {
            label: 'Yearly',
            value: 12
        }];

        this.state = {
            initialSavings: 0,
            monthlySavings: 0,
            interestRate: 0,
            interestFrequency: 1
        };
    }
    /*
    handleValueUpdate(propName, value) {
        console.log('a');
        const parsedValue = parseFloat(value);
        this.setState({ [propName]: parsedValue });
    }
    */
    handleValueUpdate = debounce((propName, value) => {
        console.log('a');
        const parsedValue = parseFloat(value);
        this.setState({ [propName]: parsedValue });
    }, 200);

    render() {
        const { initialSavings, monthlySavings, interestRate, interestFrequency } = this.state;
        const compoundInterestQuery = getCompoundInterestQuery(initialSavings, monthlySavings, interestRate, interestFrequency);

        return (
            <div>
                <div className="financial-inputs">
                    <p className="input-label">How much have you saved?</p>
                    <CurrencyInput defaultValue={this.state.initialSavings}
                        propName={'initialSavings'}
                        onUpdate={this.handleValueUpdate.bind(this)}
                    />

                    <p className="input-label">How much will you save each month?</p>
                    <CurrencyInput defaultValue={this.state.monthlySavings}
                        propName={'monthlySavings'}
                        onUpdate={this.handleValueUpdate.bind(this)}
                    />

                    <p className="input-label">How much interest will you earn per year?</p>
                    <SliderInput defaultValue={this.state.interestRate}
                        propName={'interestRate'}
                        onUpdate={this.handleValueUpdate.bind(this)}
                    />
                </div>
                <div className="financial-inputs">
                    <p className="input-label">How often will the interest be paid?</p>
                    <RadioSelector options={this.interestFrequencyOptions}
                        propName={'interestFrequency'}
                        onUpdate={this.handleValueUpdate.bind(this)}
                    />
                </div>
                <Query query={compoundInterestQuery}>
                    {({ loading, error, data }) => {
                        if (error) {
                            return <div>Error</div>;
                        }
                        
                        if (!data || !data.compoundInterest) {
                            return <div>No data available</div>;
                        }

                        return (
                            <div className="financial-display">
                               <DisplayGraph data={data.compoundInterest.values} />
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
	}
}

CompoundInterestGraph.propTypes = {
    initialSavings: PropTypes.number,
    monthlySavings: PropTypes.number,
    interestRate: PropTypes.number
};