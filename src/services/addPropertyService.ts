import { PropertyRepository } from "../repositories/propertyRepository";
import { PropertyDocument } from "../models/mongo.schema";
import { AddPropertyInput } from "../models/common.models";
import axios from "axios";


export class AddPropertyService {

    static async execute(input: AddPropertyInput): Promise<any> {
        const { city, street, state, zipCode, lat, long } = input;

        if (!city || !street || !state || !zipCode) {
            throw new Error("All property fields (city, street, state, zipCode) are required.");
        }

        const weatherData = await this.fetchWeatherData(city, state);

        await PropertyRepository.create({
            city,
            street,
            state,
            zipCode,
            weatherData,
            lat,
            long
        });
    }

    static async fetchWeatherData(city: string, state: string): Promise<any> {
        try {
            const response = await axios.get(`http://api.weatherstack.com/current`, {
                params: {
                    access_key: process.env.WEATHERSTACK_API_KEY,
                    query: `${city}, ${state}`,
                },
            });

            const data = response.data;

            if (!data || !data.current) {
                throw new Error("Unable to fetch weather data.");
            }

            return {
                temperature: data.current.temperature,
                weather_descriptions: data.current.weather_descriptions,
                weather_icons: data.current.weather_icons,
                humidity: data.current.humidity,
                latitude: data.location.lat,
                longitude: data.location.lon,
            };
        } catch (error) {
            throw new Error("Error fetching weather data from Weatherstack.");
        }
    }
}
