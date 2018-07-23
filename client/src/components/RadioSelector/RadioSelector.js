import React, { Component } from 'react';
import PropTypes from 'prop-types';

let radioId = 0;

export default class RadioSelector extends Component {
	constructor(props) {
        super(props);

        radioId += 1;

        if (props.options.length) {
            this.state = {
                value: props.options[0].value
            };
        }
	}

	handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
        if (this.props.onUpdate) {
            this.props.onUpdate(this.props.propName, value);
        }
	}

	render() {
        return (
            <div>
                {
                    this.props.options.map((option, index) => {
                        return (
                            <div key={option.value.toString()}>
                                <input type="radio"
                                    name={radioId + ''}
                                    value={option.value}
                                    onChange={this.handleChange.bind(this)}
                                    defaultChecked={index === 0}
                                />
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
	}
}

RadioSelector.propTypes = {
    options: PropTypes.array,
    propName: PropTypes.string,
    onUpdate: PropTypes.func
};
