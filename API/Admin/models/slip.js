"use strict";

module.exports = (sequelize, DataTypes) => {
  const Slip = sequelize.define("Slip", {
      transferBank: DataTypes.STRING(100),
      transferName: DataTypes.STRING(100),
      transferAccount: DataTypes.STRING(100),
      receiverBank: DataTypes.STRING(100),
      receiverName: DataTypes.STRING(100),
      receiverAccount: DataTypes.STRING(100),
      date: DataTypes.STRING(100),
      time: DataTypes.STRING(100),
      amount: DataTypes.DOUBLE,
      serial: DataTypes.STRING(255),
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE
    },
    {
      tableName: "Slip",
    }
  );

  Slip.associate = (models) => {
  };
  
  return Slip;
};
