const models = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const axios = require('axios');


exports.uploadFile = async (req,res,next) => {
  try {
    console.log(req.file, req.body)
    const data = await models.Main_Bank.findOne({
      where: {
       bank_number: req.body.bank_number
      }
     });
     if(data.bank_slip == '1'){
      const responseSlip = await axios.post(process.env.PATH_API_PYTHON + '/api/slip', req.file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("test:",responseSlip)
    //  if(responseSlip.body.qrcode.valid == true){
    //   // const text = `{ "userId": "${userLineId}", "": "",}`;
    //   // console.log('=checkAccountLine=', JSON.parse(text));
    //   const data = await models.Qrcode.findOne({
    //     where: {
    //     text: req.body.qrcode.text
    //     }
    //   });
    //   if (data) {
    //     const error = new Error("มีการใช้งานในระบบแล้ว");
    //     error.statusCode = 404;
    //     throw error;
    //   }else{
    //     const slip = await models.Slip.create({
    //       uuid: uuidv4(),
    //       transferBank: req.body.transfer.bank,
    //       transferName: req.body.transfer.name,
    //       transferAccount: req.body.transfer.account_number,
    //       receiverBank: req.body.receiver.bank,
    //       receiverName: req.body.receiver.name,
    //       receiverAccount: req.body.receiver.account_number,
    //       date: req.body.date,
    //       time: req.body.time,
    //       amount: req.body.amount,
    //       serial:  req.body.serial,
    //       createdAt: new Date()
    //     });
    //     const qrcode =await models.Qrcode.create({
    //       text: req.body.qrcode.text,
    //       version:req.body.qrcode.version,
    //       bank:req.body.qrcode.bank,
    //       serial: req.body.qrcode.serial,
    //       country:  req.body.qrcode.country,
    //       checksum: req.body.qrcode.checksum,
    //       valid: req.body.qrcode.valid,
    //       slip_transaction_uuid: slip.uuid,
    //       createdAt: new Date()
    //     });
        
    //     const memberAccountBank = await models.Member_Account_Bank.findOne({
    //       attributes: ["member_uuid"],
    //       where: {
    //         bank_number: {
    //           [Op.like]: `%${bank_number}%`,
    //         }
    //       },
    //     });
    //     const bank = await models.Main_Bank.findAll({
    //       attributes: ['bank_name', 'bank_account_name', 'bank_number', 'amount'],
    //       where: { bank_type: 1,bank_name: 'ttb'},
    //       order: [["id", "DESC"]],
    //     });
    //     receiverBank = 'ttb'
    //     if(result.slip.transferBank === memberAccountBank.bank_name &&
    //       result.slip.transferAccount === memberAccountBank.bank_number &&
    //       result.slip.transferName === memberAccountBank.bank_account_name &&
    //       result.slip.receiverAccount === bank.bank_number &&
    //       result.slip.receiverName === bank.bank_account_name &&
    //       receiverBank === bank.bank_name){
    //         const checkexistSms = await models.Sms_Slip_Transaction.findOne({
    //           where: {
    //             bank_date: result.slip.date,
    //             bank_time: result.slip.time,
    //             amount: result.slip.amount,
    //             bank_tranfer: {
    //               [Op.like]: 'ttb',
    //             },
    //           },
    //         });

    //         if(checkexistSms){
    //             //credit
    //         }

    //     }
    //   }

        
      
    // }
  }

  return res.status(200).json({
    message: 'Success'
   });

  } catch (error) {
    next(error);
  }
};
exports.checkStatusApi = async (req,res,next) => {
  try {
    console.log(req.body.bank_number)
    const data = await models.Main_Bank.findOne({
      where: {
       bank_number: req.body.bank_number
      }
     });

     if (!data) {
       const error = new Error("ไม่พบผู้ใช้งานใช้ในระบบ");
       error.statusCode = 404;
       throw error;
     }
     return res.status(200).json({
      message: 'Success',
      status: data.bank_slip
     });
  } catch (error) {
    next(error);
  }
};
exports.checkQrcode = async (req,res,next) => {
  try {
    const data = await models.Qrcode.findOne({
       where: {
        text: req.body.text
       }
      });

      if (data) {
        const error = new Error("มีการใช้งานในระบบแล้ว");
        error.statusCode = 404;
        throw error;
      }else{
        await models.Qrcode.create({
          text: req.body.text,
          version:req.body.version,
          serial: req.body.serial,
          country:  req.body.country,
          checksum: req.body.checksum,
          updatedAt: new Date(),
          createdAt: new Date()
        });
      }
      return res.status(200).json({
        message: 'Success'
       });
  } catch (error) {
    next(error);
  }
};
exports.checkTest = async (req,res,next) => {
  try {
    const data = await models.Qrcode.findOne({
      where: {
      text: req.body.qrcode.text
      }
    });
    if (data) {
      const error = new Error("มีการใช้งานในระบบแล้ว");
      error.statusCode = 404;
      throw error;
    }else{
      const slip = await models.Slip.create({
        uuid: uuidv4(),
        transferBank: req.body.transfer.bank,
        transferName: req.body.transfer.name,
        transferAccount: req.body.transfer.account_number,
        receiverBank: req.body.receiver.bank,
        receiverName: req.body.receiver.name,
        receiverAccount: req.body.receiver.account_number,
        date: req.body.date,
        time: req.body.time,
        amount: req.body.amount,
        serial:  req.body.serial,
        createdAt: new Date()
      });
      const qrcode =await models.Qrcode.create({
        text: req.body.qrcode.text,
        version:req.body.qrcode.version,
        bank:req.body.qrcode.bank,
        serial: req.body.qrcode.serial,
        country:  req.body.qrcode.country,
        checksum: req.body.qrcode.checksum,
        valid: req.body.qrcode.valid,
        slip_transaction_uuid: slip.uuid,
        createdAt: new Date()
      });
        
      }
      return res.status(200).json({
        message: 'Success',
        slip: slip,
        qrcode: qrcode
      });
  } catch (error) {
    next(error);
  }
};