import { QueryWithFilter } from "../models/common.models";
import { Property } from "../models/mongo.schema";
import { PropertyRepository } from "../repositories/propertyRepository";

export class GetPropertiesWithFilterService {
    static async execute(args: QueryWithFilter): Promise<Property[]> {

        const { field, value, sortBy, sortOrder } = args;

        if (!field || !value) {
            throw new Error("Missing value");
        }

        const filter: any = {};
        filter[field] = value;

        const sort: any = {};

        if (sortBy) {
            sort[sortBy] = sortOrder === "desc" ? -1 : 1;
        } else {
            sort["createdAt"] = -1;
        }

        return await PropertyRepository.findWithFilter(field, value, sortBy, sortOrder);
    }
}