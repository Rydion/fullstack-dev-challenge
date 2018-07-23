import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLInt
} from 'graphql';
import compoundInterestType from '../types/compoundInterest';
import { calculateMonthlyCompoundInterest } from '../../utils/interest/interest';

export default {
    compoundInterest: {
        type: compoundInterestType,
        args: {
            initialSavings: {
                name: 'initialSavings',
                type: new GraphQLNonNull(GraphQLFloat)
            },
            monthlySavings: {
                name: 'monthlySavings',
                type: new GraphQLNonNull(GraphQLFloat)
            },
            interestRate: {
                name: 'interestRate',
                type: new GraphQLNonNull(GraphQLFloat)
            },
            interestFrequency: {
                name: 'interestFrequency',
                type: new GraphQLNonNull(GraphQLInt)
            }
        },
        resolve: (root, { initialSavings, monthlySavings, interestRate, interestFrequency }) => {
            const numberOfMonths = 50*12; // 50 years, 12 months each
            const monthlyCompoundInterest = calculateMonthlyCompoundInterest(initialSavings, monthlySavings, interestRate, interestFrequency, numberOfMonths);
            return {
                granularity: 'monthly',
                // Format the output correctly
                values: monthlyCompoundInterest.map((a, i) => ({time: i + 1, amount: a}))
            };
        }
    }
};
