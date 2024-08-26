const dotenv = require('dotenv');
dotenv.config()

const { MongoClient } = require('mongodb')

const client = new MongoClient(process.env.MONGO_URL)

async function connectMongo() {
    try {
        await client.connect()
        console.log("Conectado a MongoDB");
        return client
    } catch (error) {
        console.log('Error al conectar con MONGO DB');
        return null
    }
}

async function disconnectMongoDB() {
    try {
        await client.close()
        console.log("desconectado de MongoDB");
        
    } catch (error) {
        console.log("Error al desconectar de MongoDB", error);
    }
}

module.exports = { connectMongo, disconnectMongoDB }