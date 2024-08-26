// const data = require('../../data.json')
const {connectMongo, disconnectMongoDB} = require('../config/bd.js')

class ProductosModel{
    static async getAll(){
        try {
            const clientMongo = await connectMongo()
            if (!clientMongo){
                throw Error('Error al conectar con Mongo')
            }
            const result = await clientMongo.db('tienda').collection('productos').find().toArray()
            await disconnectMongoDB()
            console.log(result);
            
            if (!result) {
                return{data:null, error:true}
            }else{
                return {data:result, error:false}
            }
            
        } catch (error) {
            return error
        }
    }
}

module.exports = ProductosModel