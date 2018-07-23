import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat
} from 'graphql';
import testType from '../types/test';

export default {
    test: {
        type: testType,
        resolve: (root) => {
            return {
                message: 'Test'
            };
        }
    }
};
