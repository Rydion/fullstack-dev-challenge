import gql from 'graphql-tag';

export default function getCompoundInterestQuery(initialSavings, monthlySavings, interestRate, interestFrequency) {
    return gql`query {
        compoundInterest(initialSavings: ${initialSavings}, monthlySavings: ${monthlySavings}, interestRate: ${interestRate}, interestFrequency: ${interestFrequency}) {
            values {
                amount, time
            }
        }
    }`;
}
