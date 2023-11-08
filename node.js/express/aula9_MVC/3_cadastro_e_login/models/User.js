const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = db.define('User',{
    name:{
        type: DataTypes.STRING,
        required: true
    },

    image: {
        type: DataTypes.BLOB
    },

    email:{
        type: DataTypes.STRING,
        required: true
    },

    password:{
        type: DataTypes.STRING,
        required: true
    },
})

module.exports = User;