
const express = require('express');
const router = express.Router();
const accessMenuController = require('../controllers/accessMenuController');

const passportJWT = require('../middleware/passportJWT');
const authentication = require('../middleware/authentication');

router.post('/set-access-menu',[passportJWT.isLogin], accessMenuController.setAccessMenu);
router.post('/update-access-menu',[passportJWT.isLogin], accessMenuController.updateAccessMenu);
router.get('/get-access-menu',[passportJWT.isLogin], accessMenuController.getAccessMenu);
router.get('/get-all-role',[passportJWT.isLogin], accessMenuController.getAllRole);
module.exports = router;