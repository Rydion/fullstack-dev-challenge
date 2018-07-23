import {
    graphql,
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType
} from 'graphql';
import rootQuery from './queries/root';

export default new GraphQLSchema({
    query: rootQuery
});
