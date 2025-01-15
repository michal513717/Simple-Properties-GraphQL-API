import { PropertyRepository } from "../repositories/propertyRepository";
import { PropertyDocument } from "../models/mongo.schema";
import axios from "axios";

interface AddPropertyInput {
    city: string;
    street: string;
    state: string;
    zipCode: string;
}

export class AddPropertyService {

    static async execute(input: AddPropertyInput): Promise<PropertyDocument> {
        const { city, street, state, zipCode } = input;

        if (!city || !street || !state || !zipCode) {
            throw new Error("All property fields (city, street, state, zipCode) are required.");
        }

        const weatherData = await this.fetchWeatherData(city, state);

        return await PropertyRepository.create({
            city,
            street,
            state,
            zipCode,
            weatherData,
            lat: weatherData.latitude,
            long: weatherData.longitude,
        });
    }

    static async fetchWeatherData(city: string, state: string): Promise<any> {
        try {
            //TMP
            // const response = await axios.get(`http://api.weatherstack.com/current`, {
            //     params: {
            //         access_key: process.env.WEATHERSTACK_API_KEY,
            //         query: `${city}, ${state}`,
            //     },
            // });

            // const data = response.data;

            //TODO add custom Errors
            // if (!data || !data.current) {
            //     throw new Error("Unable to fetch weather data.");
            // }

            // return {
            //     temperature: data.current.temperature,
            //     weather_descriptions: data.current.weather_descriptions,
            //     weather_icons: data.current.weather_icons,
            //     humidity: data.current.humidity,
            //     latitude: data.location.lat,
            //     longitude: data.location.lon,
            // };
            return {
                "observation_time": "03:52 PM",
                "temperature": 5,
                "weather_code": 113,
                "weather_icons": [
                    "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
                ],
                "weather_descriptions": [
                    "Sunny"
                ],
                "wind_speed": 13,
                "wind_degree": 208,
                "wind_dir": "SSW",
                "pressure": 1038,
                "precip": 0,
                "humidity": 75,
                "cloudcover": 0,
                "feelslike": 2,
                "uv_index": 0,
                "visibility": 10,
                "is_day": "yes"
            }
        } catch (error) {
            throw new Error("Error fetching weather data from Weatherstack.");
        }
    }
}
