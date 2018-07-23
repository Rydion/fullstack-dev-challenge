import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import debounce from 'debounce';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import SliderInput from '../SliderInput/SliderInput';
import DisplayGraph from '../DisplayGraph/DisplayGraph';
import getCompoundInterestQuery from '../../graphql/queries/compoundInterestQuery';
import './CompoundInterestGraph.css';

export default class CompoundInterestGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialSavings: 0,
            monthlySavings: 0,
            interestRate: 0
        };
    }

    handleValueUpdate(propName, value) {
        const parsedValue = parseFloat(value);
        this.setState({ [propName]: parsedValue });
    }

    render() {
        const { initialSavings, monthlySavings, interestRate } = this.state;
        const compoundInterestQuery = getCompoundInterestQuery(initialSavings, monthlySavings, interestRate);

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
                        onUpdate={debounce(this.handleValueUpdate.bind(this), 100)}
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

                        return <div className="financial-display">
                                   <DisplayGraph data={data.compoundInterest.values} />
                               </div>;
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