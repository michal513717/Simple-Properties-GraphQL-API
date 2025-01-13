import { createSchema } from "graphql-yoga";
import { propertyQueryResolvers } from "./resolvers/queries/propertyResolvers.resolver";
import { propertyMutationResolvers } from "./resolvers/mutations/propertyMutation.resolver";
import { propertyTypeDefinitions } from "./typedefs/property";

export async function loadSchemas() {
    return createSchema({
        resolvers: [{
            Query: propertyQueryResolvers,
            Mutation: propertyMutationResolvers
        }],
        typeDefs: [propertyTypeDefinitions]
    })
}