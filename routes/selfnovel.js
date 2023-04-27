const express = require('express');
const controller = require('../controller/Cselfnovel');
const router = express.Router();


router.get('/',controller.indexpage);
router.get('/signin',controller.getsignin);
router.get('/signup',controller.getsignup);

module.exports = router;