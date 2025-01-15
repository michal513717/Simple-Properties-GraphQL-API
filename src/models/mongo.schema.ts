import { Schema, Document, Types } from "mongoose";
import mongoose from "mongoose";

export type Property = {
    _id: Types.ObjectId;
    lat: number;
    long: number;
    city: string;
    state: string;
    street: string;
    zipCode: string;
    weatherData: WeatherData;
};

export type WeatherData = {
    observation_time: string;
    temperature: number;
    weather_code: number;
    weather_icons: string[];
    weather_descriptions: string[];
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: number;
    uv_index: number;
    visibility: number;
    is_day: string;
};

export type PropertyDocument = Property & Document;

export const PropertySchema = new Schema<PropertyDocument>({
    city: { type: String, required: true },
    street: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    weatherData: { type: Object, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
}, { timestamps: true, versionKey: false });

export const PropertyModel = mongoose.model<PropertyDocument>('Property', PropertySchema, 'properties');