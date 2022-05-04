const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Like = sequelize.define("Like", {
    fkUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fkPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {});

module.exports = Like;