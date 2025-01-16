import { Property, PropertyDocument } from "./mongo.schema";

export interface AddPropertyInput {
    city: string;
    street: string;
    state: string;
    zipCode: string;
    lat: number;
    long: number;
};

export type QueryWithFilter = {
    field: string, 
    value: string, 
    sortBy?: string;
    sortOrder?: "asc" | "desc";
};

export enum ResponseStatus {
    FAILED = "FAILED",
    SUCCESS = "SUCCESS"
};
export enum ERROR_CODES {
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    PROPERTY_NOT_FOUND = "PROPERTY_NOT_FOUND",
    INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
    VALIDATION_ERROR = "VALIDATION_ERROR"
};

export type PropertyQueryResolvers = {
    getPropertyById: (_: undefined, args: { id: string }) => Promise<PropertyDocument>;
    getAllProperties: () => Promise<Property[]>;
    getPropertiesWithFilter: (
        _: undefined, 
        args: QueryWithFilter
    ) => Promise<Property[]>;
};

export type PropertyMutationResolvers = {
    addProperty: (_: undefined, data: {
        propertyData: AddPropertyInput
    }) => Promise<void>;
    deleteProperty: (_: undefined, args: { id: string }) => Promise<void>;
}