const Sequelize = require('sequelize')

// require models here


// create the database instance that can be used in other database files
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/boilermaker`, {
 logging: false
})

// associations


// export db and models
module.exports = { db }