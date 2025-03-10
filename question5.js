const express = require('express');
const mysql = require('mysql2/promise');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

// database configuration
const database = 'db';
const user = '';
const password = '';

async function initialize() {

    // connect to db
    const sequelize = new Sequelize(database, user, password, {
        host: 'localhost',
        dialect: 'mysql'
    });

    // define the user model
    const User = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        name: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false, unique: true},
        status: {type: DataTypes.STRING, allowNull: false, defaultValue: 'active'}
    });

    // sync model with database
    await sequelize.sync({ alter: true });

    // define route to get all users
    app.get('/users', async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // start server
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

initialize().catch(err => {
    console.error('Failed to initialize:', err);
});