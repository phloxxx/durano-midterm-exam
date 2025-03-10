const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const { DataTypes } = reuire('sequelize');

async function initialize() {
    // connect to db
    const sequelize = new Sequelize(DatabaseSync, user, password, {dialect: 'mysql'});
}

function model(sequelize) {
    const attributes = {
        id: { type: DataTypes.NUMBER, allowNUll: false},
        name: { type: DataTypes.STRING, allowNUll: false},
        email: { type: DataTypes.STRING, allowNUll: false},
        status: { type: DataTypes.STRING, allowNUll: false},
    };

    return sequelize.define
}