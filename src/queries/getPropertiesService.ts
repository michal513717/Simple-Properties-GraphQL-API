import { Property } from "../models/mongo.schema";
import { PropertyRepository } from "../repositories/propertyRepository";

export class GetPropertiesService {
    async execute(filters?: any, sortKey?: string): Promise<Property[]> {
        return PropertyRepository.findAll(filters, sortKey);
    }
}