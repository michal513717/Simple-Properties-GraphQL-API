import { Property, PropertyDocument } from "./mongo.schema";

export interface AddPropertyInput {
    city: string;
    street: string;
    state: string;
    zipCode: string;
    lat: number;
    long: number;
}

export type PropertyQueryResolvers = {
    getProperties: (_: undefined, args: {
        filters: Partial<PropertyDocument>
        sortKey: string
    }) => Promise<Property[]>;
    getPropertyById: (_: undefined, args: { id: string }) => Promise<PropertyDocument>;
};

export type PropertyMutationResolvers = {
    addProperty: (_: undefined, data: {
        propertyData: AddPropertyInput
    }) => Promise<void>;
    deleteProperty: (_: undefined, args: { id: string }) => Promise<void>;
}