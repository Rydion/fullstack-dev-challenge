import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './App';
import './index.css';

const client = new ApolloClient({
    uri: 'http://localhost:3001/api'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
