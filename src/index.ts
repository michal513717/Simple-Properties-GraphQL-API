import * as dotenv from 'dotenv';
import * as log4js from 'log4js';
import { configureLogger } from './utils/logger';
import { getMongoClient } from './databases/mongoStore';
import { createYoga } from 'graphql-yoga';
import { loadSchemas } from './api';
import { createServer } from 'http';

dotenv.config();

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || '';

async function main() {
    configureLogger();

    const logger = log4js.getLogger("Main");

    try {
        const mongoClient = await getMongoClient(mongoUri);
        const schema = await loadSchemas();
        const yoga = createYoga({ schema });
        const server = createServer(yoga);
        
        server.listen(port, () => {
            logger.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        logger.error('Error starting the server', error);
    }
}

main().catch((error) => {
    console.log(error);
});