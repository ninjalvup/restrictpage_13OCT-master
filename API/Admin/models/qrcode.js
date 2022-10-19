"use strict";

module.exports = (sequelize, DataTypes) => {
  const Qrcode = sequelize.define("Qrcode", {
      text: DataTypes.STRING(255),
      version: DataTypes.STRING(100),
      bank: DataTypes.STRING(100),
      serial: DataTypes.STRING(255),
      country:  DataTypes.STRING(100),
      checksum: DataTypes.STRING(100),
      valid: DataTypes.BOOLEAN,
      slip_transaction_uuid: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE
    },
    {
      tableName: "Qrcode",
    }
  );

  Qrcode.associate = (models) => {
  };
  
  return Qrcode;
};
