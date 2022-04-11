var express = require('express');
var router = express.Router();
var userCtl = require('../controllers/user');

router.post('/addUsers',userCtl.addUsers);