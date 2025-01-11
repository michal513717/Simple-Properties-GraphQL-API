import { Schema, Document, Types } from "mongoose";

export type Propertie = Document & {
    _id: Types.ObjectId;
    city: string;
    street: string;
    state: string;
    zipCode: string;
    weatherData: unknown;
    lat: number;
    long: number;
};

export const PropertieSchema = new Schema<Propertie>({}, { collection: 'propertiesCollection', versionKey: false });