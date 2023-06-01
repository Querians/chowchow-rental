import { asNexusMethod, arg, core } from 'nexus';
import { GraphQLDateTime } from 'graphql-scalars';

export const GQLDate = asNexusMethod(GraphQLDateTime, 'dateTime');
