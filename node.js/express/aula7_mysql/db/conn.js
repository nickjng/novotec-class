const express = require('express')
const mysql = require('mysql')


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user:'root',
    password:'Bancodedados4!',
    database:'conn'
})

module.exports = pool
