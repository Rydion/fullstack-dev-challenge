import React from 'react';
import gql from 'graphql-tag';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
        // Try to render the entire app
        const mocks = [{ request: { query: gql`{ test }` } }]
        const appComponent = mount(
            <MockedProvider mocks={mocks}>
                <App />
            </MockedProvider>
        );
    });
});
