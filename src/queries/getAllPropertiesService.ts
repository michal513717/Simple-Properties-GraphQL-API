import { Property } from "../models/mongo.schema";
import { PropertyRepository } from "../repositories/propertyRepository";

export class GetAllPropertiesService {
    static async execute(): Promise<Property[]> {
        return PropertyRepository.findAll();
    }
}