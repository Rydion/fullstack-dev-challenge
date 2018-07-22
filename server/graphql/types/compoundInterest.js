import {
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLString,
    GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
    name: 'compoundInterest',
    fields: () => ({
        granularity: {
            type: GraphQLString,
            description: 'The granularity of values. Valid values: monthly.',
        },
        values: {
            type: new GraphQLList(GraphQLFloat),
            description: 'The evolution of savings over time.',
        }
    })
});
