import {
    graphql,
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType
} from 'graphql';
import compoundInterestQuery from './queries/getCompoundInterest';

export default new GraphQLSchema({
    query: compoundInterestQuery
});
