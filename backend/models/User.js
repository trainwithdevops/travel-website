const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    googleId: {
        type: DataTypes.STRING,
    },
    profile: {
        type: DataTypes.JSON,
        defaultValue: {},
    },
    badges: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
    },
}, {
    timestamps: true,
});

module.exports = User;
