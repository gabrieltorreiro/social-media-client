const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const User = sequelize.define("user", {
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {});

module.exports = User;