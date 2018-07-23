import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat
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
            }
        },
        resolve: (root, { initialSavings, monthlySavings, interestRate }) => {
            const numberOfMonths = 50*12; // 50 years, 12 months each
            const monthlyCompoundInterest = calculateMonthlyCompoundInterest(initialSavings, monthlySavings, interestRate, numberOfMonths);
            return {
                granularity: 'monthly',
                // Format the output correctly
                values: monthlyCompoundInterest.map((a, i) => ({time: i, amount: a}))
            };
        }
    }
};
