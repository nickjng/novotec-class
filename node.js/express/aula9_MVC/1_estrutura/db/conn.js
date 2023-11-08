const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('nodemvc', 'root', 'Bancodedados4!', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;