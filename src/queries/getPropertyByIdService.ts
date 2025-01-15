import { PropertyRepository } from "../repositories/propertyRepository";
import { PropertyDocument } from "../models/mongo.schema";

export class GetPropertyByIdService {

    async execute(id: string): Promise<PropertyDocument> {
        //TODO add custom Errors
        if (!id) {
            throw new Error("Property ID is required.");
        }

        const property = await PropertyRepository.findById(id);

        //TODO add custom Errors
        if (!property) {
            throw new Error(`Property with ID ${id} not found.`);
        }

        return property;
    }
}