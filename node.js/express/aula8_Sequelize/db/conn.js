const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('sequelize', 'root', 'Bancodedados4!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize