import axios from 'axios';
import { baseURL, baseApiPython } from './api';
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname);
  }
});
var upload = multer({ storage: storage });

export default {
  // async uploadSlip(formData) {
  //   // var formData = new FormData();
  //   // var imagefile = document.querySelector('#file');
  //   // formData.append("image", imagefile.files[0]);
  //   const response = await axios.post(baseApiPython + '/api/slip', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //   })
  //   console.log("response api qrcode:",response)
  //   return axios
  //     .post(baseURL + '/check/slip', response ,{
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + localStorage.getItem("access_token"),
  //       }
  //     },)
  //     .then(response => response.data);
  // },
  // async uploadQrcode(formData) {
  //   const response = await axios.post(baseApiPython + '/api/qrcode', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //   })
  //   console.log("response api qrcode:",response)
  //   return axios
  //     .post(baseURL + '/check/qrcode', response ,{
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + localStorage.getItem("access_token"),
  //       }
  //     },)
  //     .then(response => response.data);
  // },
  async uploadTest(formData) {
    const bank_number = ''
    const responseStatus = await axios.post(baseURL + 'test/check/statusapi', bank_number, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      }
    });
    if(responseStatus.status == '1'){
      const responseSlip = await axios.post(baseApiPython + '/api/slip', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if(responseSlip.body.qrcode.valid == true){
        // const text = `{ "userId": "${userLineId}", "": "",}`;
        // console.log('=checkAccountLine=', JSON.parse(text));
        const result = await axios
        .post(baseURL + '/test/check/test', responseSlip.body ,{
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          }
        },)
        .then(response => response.data);
        console.log(result)
        if(result){
          const memberAccountBank = await models.Member_Account_Bank.findOne({
            attributes: ["member_uuid"],
            where: {
              bank_number: {
                [Op.like]: `%${bank_number}%`,
              }
            },
          });
          const bank = await models.Main_Bank.findAll({
            attributes: ['bank_name', 'bank_account_name', 'bank_number', 'amount'],
            where: { bank_type: 1,bank_name: 'ttb'},
            order: [["id", "DESC"]],
          });
          receiverBank = 'ttb'
          if(result.slip.transferBank === memberAccountBank.bank_name &&
            result.slip.transferAccount === memberAccountBank.bank_number &&
            result.slip.transferName === memberAccountBank.bank_account_name &&
            result.slip.receiverAccount === bank.bank_number &&
            result.slip.receiverName === bank.bank_account_name &&
            receiverBank === bank.bank_name){
              const checkexistSms = await models.Sms_Slip_Transaction.findOne({
                where: {
                  bank_date: result.slip.date,
                  bank_time: result.slip.time,
                  amount: result.slip.amount,
                  bank_tranfer: {
                    [Op.like]: 'ttb',
                  },
                },
              });

              if(checkexistSms){
                  //credit
              }

          }
        }
    }
    
      
    }
    return res.status(200).json({
      message: 'Success'
     });
    
  },
};