var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fname : {
        type :  String,
        required: true
    },
    lname : {
        type :  String,
        required: true
    },
    email : {
        type :  String,
        required: true
    },
    password : {
        type :  String,
        required: true
    },
    picture : {
        type :  String,
    },
 
    created_at : {
      type :  Date,
      default: new Date()
   },
    updated_at : {
      type :  Date,
      default: null
   },
    deleted_at : {
      type :  Date,
      default: null
   }

});


module.exports = mongoose.model('User', UserSchema); 