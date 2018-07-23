import {
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

const compoundInterestValue = new GraphQLObjectType({
    name: 'CompoundInterestValue',
    fields: () => ({
        amount: {
            type: GraphQLFloat
        },
        time: {
            type: GraphQLInt
        }
    })
});

export default new GraphQLObjectType({
    name: 'CompoundInterest',
    fields: {
        granularity: {
            type: GraphQLString,
            description: 'The granularity of values. Valid values: monthly.',
        },
        values: {
            type: new GraphQLList(compoundInterestValue),
            description: 'The evolution of savings over time.',
        }
    }
});
