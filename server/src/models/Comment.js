const sequelize = require("../database/sequelize");
const { DataTypes } = require('sequelize');

const Comment = sequelize.define("Comment", {
    fkUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fkPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {});

module.exports = Comment;