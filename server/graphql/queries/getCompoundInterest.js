import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat
} from 'graphql';
import compoundInterestType from '../types/compoundInterest';

export default new GraphQLObjectType({
    name: 'CompoundInterestQuery',
    fields: {
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
                    values: [initialSavings]
                };
            }
        }
    }
});
