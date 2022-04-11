var express = require('express');
var router = express.Router();
var userCtl = require ('../controllers/user');

/* homepage */ 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  //res.sendFile(__dirname + "/login");
});

/* GET users listing. */
router.get('/all',userCtl.getAllUsers);

// add many users
router.post('/addUsers',userCtl.addUsers);

/* update passwordUser */
router.put('/updatePassword/:id',userCtl.updateUserPassword);

/* remove user by id */
router.delete('/:id',userCtl.removeUserById);

/* user login check */
router.post('/login', userCtl.userLogin);

/* user upload picture */
//router.post('/upload',userCtl.uploadUserPicture);


module.exports = router;
