import { asNexusMethod, arg, core } from 'nexus';
import { GraphQLJSON } from 'graphql-scalars';

export const GQLJSON = asNexusMethod(GraphQLJSON, 'json');
