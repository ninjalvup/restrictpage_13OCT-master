"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/index')

module.exports = (sequelize, DataTypes) => {
const Menu = sequelize.define("Menu", {
name: DataTypes.STRING(100),
type: DataTypes.STRING(100),
role: DataTypes.STRING(100),
group: DataTypes.INTEGER,
status: DataTypes.BOOLEAN,
updatedAt: DataTypes.DATE,
createdAt: DataTypes.DATE,
},
{
tableName: "Menu",
}
);

Menu.associate = (models) => {
// associations can be defined here
};


return Menu;

};
 