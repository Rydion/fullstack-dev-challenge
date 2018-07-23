import {
    GraphQLObjectType
} from 'graphql';
import compoundInterest from './compoundInterest';
import test from './test';

export default new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        ...compoundInterest,
        ...test
    }
});
