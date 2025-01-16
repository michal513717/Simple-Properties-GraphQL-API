import mongoose from "mongoose";
import { Property, PropertyDocument, PropertyModel, PropertySchema } from "../models/mongo.schema";

export class PropertyRepository {

    static async create(data: Partial<PropertyDocument>): Promise<PropertyDocument> {
        return await PropertyModel.create(data);
    }

    static async findAll(): Promise<PropertyDocument[]> {
        return await PropertyModel.find();
    }

    static async findWithFilter(field: string, value: string, sortBy: string = "createdAt", sortOrder: "asc" | "desc" = "desc"): Promise<PropertyDocument[]> {
        const filter: any = {};
        filter[field] = value;
        return await PropertyModel.find(filter).sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 });
    }

    static async findById(id: string): Promise<PropertyDocument | null> {
        return await PropertyModel.findById(id);
    }

    static async deleteById(id: string): Promise<boolean> {
        const result = await PropertyModel.findByIdAndDelete(id);
        return result !== null;
    }
}