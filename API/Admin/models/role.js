"use strict";

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
      name: DataTypes.STRING(100),
      by: DataTypes.STRING(100),
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
    },
    {
      tableName: "Role",
    }
  );

  Role.associate = (models) => {
    // associations can be defined here
  };

  
  return Role;

};
