import React, { Component } from 'react';
import CurrencyInput from './components/CurrencyInput/CurrencyInput';
import SliderInput from './components/SliderInput/SliderInput';
import DisplayGraph from './components/DisplayGraph/DisplayGraph';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header-banner">
                    <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
                </div>
                <div className="financial-inputs">
                    <p className="input-label">How much have you saved?</p>
                    <CurrencyInput />

                    <p className="input-label">How much will you save each month?</p>
                    <CurrencyInput />

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

export default App;
