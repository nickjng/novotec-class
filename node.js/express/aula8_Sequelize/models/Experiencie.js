const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = require('./User')

const Experiencie = db.define('Experiencie', {
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },

    salario: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Experiencie)
Experiencie.belongsTo(User)
module.exports = Experiencie;
