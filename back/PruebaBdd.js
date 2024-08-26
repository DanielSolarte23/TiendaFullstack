const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);

async function testConnection() {
    try {
        console.log('Intentando conectar a MongoDB...');
        await client.connect();
        console.log('Conectado a MongoDB');
        await client.close();
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
    }
}

testConnection();
