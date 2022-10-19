const express = require('express');
const router = express.Router();
const autoSmsSlipController = require('../controllers/autoSmsSlipController');

const passportJWT = require('../middleware/passportJWT');
const authentication = require('../middleware/authentication');

router.post('/scb/insert-sms-transaction/:key', autoSmsSlipController.insertSms);
router.post('/kbank/insert-sms-transaction/:key', autoSmsSlipController.insertKbankSms);

router.get('/scb/sms-transaction', [passportJWT.isLogin, ], autoSmsSlipController.getSmsListSCB);
router.get('/scb/sms-transaction/list-wait', [passportJWT.isLogin, ], autoSmsSlipController.getSmsListSCBStatusWait);
router.get('/scb/sms-transaction/list-success', [passportJWT.isLogin, ], autoSmsSlipController.getSmsListSCBStatusSuccess);
router.get('/scb/sms-transaction/:uuid', [passportJWT.isLogin, ], autoSmsSlipController.getSmsSCBByUUID);
router.post('/scb/sms-transaction/approved-deposit/:uuid', [passportJWT.isLogin, ], autoSmsSlipController.approvedSmsSCB);
router.post('/scb/sms-transaction/approved-auto', [passportJWT.isLogin, ], autoSmsSlipController.callApprovedSmsSCB);
router.post('/scb/sms-transaction/hide/:uuid', [passportJWT.isLogin, ], autoSmsSlipController.hideSmsSCB);
router.post('/scb/sms-transaction/show/:uuid', [passportJWT.isLogin, ], autoSmsSlipController.showSmsSCB);

module.exports = router;