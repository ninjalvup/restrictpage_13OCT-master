'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sms_Slip_Transaction = sequelize.define('Sms_Slip_Transaction', {
    uuid: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    bank_acct: DataTypes.STRING,
    bank_date: DataTypes.STRING,
    bank_time: DataTypes.STRING,
    amount: DataTypes.STRING,
    bank_tranfer: DataTypes.STRING,
    sms_content: DataTypes.STRING,
    title_tranfer: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    // tableName: "sms_transactions",
       tableName: "Sms_Slip_Transaction",
  });
  Sms_Slip_Transaction.associate = function(models) {
    // associations can be defined here
    models.Sms_Slip_Transaction.hasOne(models.Member_Account_Bank_Transaction, {
      as: "member_account_bank_transaction",
      foreignKey: 'sms_slip_transaction_uuid', // fk
      sourceKey: 'uuid' // pk
    });
  };
  return Sms_Slip_Transaction;
};