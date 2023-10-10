const {DataTypes} = require('sequelize')

const db =  require('../db/conn')

const User = db.define('User', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    ocupacao:{
        type: DataTypes.STRING,
        required: true
    },

    alertas:{
        type: DataTypes.BOOLEAN,
    }
})

module.exports = User;