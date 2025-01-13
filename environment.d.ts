declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGODB_URI: string;
            MONGODB_DB_NAME: string;
            WEATHERSTACK_API_KEY: string;
        }
    }
}

export {};