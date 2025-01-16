export const propertyTypeDefinitions = /* GraphQL */ `

    type Property {
        _id: ID!    
        city: String!
        street: String
        state: String!
        zipCode: String!
        weatherData: WeatherData!
        lat: Float!
        long: Float!
    }

    type WeatherData {
        observation_time: String
        temperature: Float
        weather_code: Float
        weather_icons: [String]
        weather_descriptions: [String]
        wind_speed: Float
        wind_degree: Float
        wind_dir: String
        pressure: Float
        precip: Float
        humidity: Float
        cloudcover: Float
        feelslike: Float
        uv_index: Float
        visibility: Float
        is_day: Is_day
    }

    enum Is_day {
        yes
        no
    }

    input PropertyInput {
        city: String!
        street: String!
        state: String!
        zipCode: String!
        lat: Float!
        long: Float!
    }

    type Mutation {
        addProperty(propertyData: PropertyInput): String
        deleteProperty(id: ID!): String
    }

    type Query {
        getPropertyById(id: ID!): Property
        getAllProperties: [Property]!
        getPropertiesWithFilter(
            field: String!
            value: String!
            sortBy: String
            sortOrder: String
        ): [Property!]!
    }
`