import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLFloat
} from 'graphql';
import testType from '../types/testType';

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
