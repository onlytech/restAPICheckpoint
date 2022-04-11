var bcrypt = require('bcryptjs');
const multer  = require('multer')
const upload = multer({ dest: './public/images/' })

const User = require('../models/User');

exports.getAllUsers = (req, res, next) => {
    User.find().then(users => {
		res.send(users);
	}).catch(err => {
		console.log('ERROR', err)
		res.status(401).json({
			error: err
		});
	});
}
exports.addUsers = (req, res, next) => {
    User.insertMany(req.body.users).then(function(){
        return res.status(201).json({ success: true, msg: 'Successful created many users'});  
    }).catch(function(error){
        console.log(error)    
    });
}

exports.updateUserPassword = (req, res, next) => {
    const filter = { id: req.params.id };
    const update = { password: req.body.password };  
    User.findOneAndUpdate(filter,update).then(p => {
        res.send(p); 
    }).catch(err => {
      console.log('ERROR', err)
      res.status(401).json({
        error: err
      });
    });
  }

  exports.removeUserById = (req, res, next) => {
    User.findOneAndRemove(req.params.id).then(p => {
        res.send(p); 
    }).catch(err => {
      console.log('ERROR', err)
      res.status(401).json({
        error: err
      });
    });
  }

  exports.userLogin = (req, res, next) => {
    const username = req.body.username;
    const password  = req.body.password;
    console.log("aaa"+ req.body.username);

    if ((username && password)) {
      User.findOne({ username:username },function(err, user){
        if(err) throw err;
        if(!user) {
           res.status(401).send("userName Invalid");
        }
        else if(password == user.password) {
           res.status(200).json(user);
   
        } 
            
            else
       res.status(400).send("Invalid Credentials");
     
   
    });
    }
    else
    {
        res.status(400).send("All inputs are required");

    }

  }

  /* upload user picture */ 
  exports.uploadUserPicture = (req, res, next) => {
    
  }