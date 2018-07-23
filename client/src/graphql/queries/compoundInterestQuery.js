import gql from 'graphql-tag';

export default function getCompoundInterestQuery(initialSavings, monthlySavings, interestRate) {
    return gql`query {
        compoundInterest(initialSavings: ${initialSavings}, monthlySavings: ${monthlySavings}, interestRate: ${interestRate}) {
            granularity,
            values {
                amount, time
            }
        }
    }`;
}
