import React, { Component } from 'react';
import CompoundInterestGraph from './components/CompoundInterestGraph/CompoundInterestGraph';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header-banner">
                    <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
                </div>
                <CompoundInterestGraph />
            </div>
        );
    }
}
