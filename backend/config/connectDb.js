const sequelize = require('sequelize')

const db = new sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})

const connectDb = async() =>{
    try {
        await db.authenticate()
        console.log('Connection has been established successfully.')
    } 
    catch(err) {
        console.log('Unable to connect to the database:', err.message)
        process.exit(1)
    }
}

module.exports = { connectDb, db }