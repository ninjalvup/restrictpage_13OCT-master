const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const passportJWT = require('../middleware/passportJWT');
const authentication = require('../middleware/authentication');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'uploadfile');
  },
  filename: function (req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname);
  }
});
var upload = multer({ storage: storage });
router.post('/check/statusapi',  [passportJWT.isLogin, ], testController.checkStatusApi);
router.post('/check/qrcode', [passportJWT.isLogin, ], testController.checkQrcode);
router.post('/check/test', [passportJWT.isLogin, ], testController.checkTest);
router.post('/upload', [passportJWT.isLogin, ], upload.single('uploaded_file'), testController.uploadFile);
// router.post('/check/qrcode', [passportJWT.isLogin, ], testController.checkQrcode);



module.exports = router;
