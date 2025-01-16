# Simple-Properties-GraphQL-API

A GraphQL API for managing property records with real-time weather data integration using Weatherstack API.

## Setup

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB and lowdb for data persistence

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/michal513717/Simple-Properties-GraphQL-API.git
    cd Simple-Properties-GraphQL-API
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables
    ```env
    PORT = 8080
    MONGO_URI = your_mongodb_connection_uri
    WEATHERSTACK_API_KEY = your_weatherstack_api_key
    ```

4. Start the server
    ```bash
    npm run dev
    ```

## API

### Queries

- getAllProperties: Retrieve a list of all properties.

- getPropertyById (id: required - string): Fetch details of a property by its ID.

- getPropertiesWithFilter (field: String!, value: String!): Filter properties by a specific

### Mutations

- addProperty - Add a new property (weather data is automatically fetched from Weatherstack API). Parameters:
    - city: required String
    - street: required String
    - state: required String
    - zipCode: required String
    - lat: required Float  
    - long: required Float
- deleteProperty(id: String!): Delete a property by its ID.

## Technology Stack

- Node.js
- MongoDB (mongoose)
- TypeScript
- Weatherstack API
- GraphQL - yoga
- log4js for logging