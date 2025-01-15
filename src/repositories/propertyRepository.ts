import mongoose from "mongoose";
import { Property, PropertyDocument, PropertyModel, PropertySchema } from "../models/mongo.schema";

export class PropertyRepository {

    static async create(data: Partial<PropertyDocument>): Promise<PropertyDocument> {
        return await PropertyModel.create(data);
    }

    static async findAll(
        filters: Partial<PropertyDocument> = {},
        sortKey: string = "createdAt"
    ): Promise<PropertyDocument[]> {
        //@ts-ignore
        return await PropertyModel.find(filters).sort({ [sortKey]: 1 });
    }

    static async findById(id: string): Promise<PropertyDocument | null> {
        return await PropertyModel.findById(id);
    }

    static async deleteById(id: string): Promise<boolean> {
        const result = await PropertyModel.findByIdAndDelete(id);
        return result !== null;
    }
}