import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat
} from 'graphql';
import compoundInterestType from '../types/compoundInterest';

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
            // TODO
            return {
                granularity: 'monthly',
                values: [{ time: 1, amount: initialSavings }, { time: 2, amount: 20 }]
            };
        }
    }
};