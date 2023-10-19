const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('sequelize', 'root', 'bancodedados', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize