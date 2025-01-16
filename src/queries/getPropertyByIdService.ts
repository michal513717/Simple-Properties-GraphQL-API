import { PropertyRepository } from "../repositories/propertyRepository";
import { PropertyDocument } from "../models/mongo.schema";

export class GetPropertyByIdService {

    static async execute(id: string): Promise<PropertyDocument> {

        if (!id) {
            throw new Error("Property ID is required.");
        }

        const property = await PropertyRepository.findById(id);

        if (!property) {
            throw new Error(`Property with ID ${id} not found.`);
        }

        return property;
    }
}