import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        // Try to render the entire app
        const appComponent = mount(<App />);
    });
});
