import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Test',
    fields: {
        message: {
            type: GraphQLString
        }
    }
});
