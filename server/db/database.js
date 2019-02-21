const Sequelize = require('sequelize')

// create the database instance that can be used in other database files
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/boilermaker`, {
 logging: false
})

// export
module.exports = db
