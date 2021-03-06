const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator"); //use as a plugins having extra functionality on schema

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  username: {type: String, required: true},
   imagePath: { type: String, default: "http://res.cloudinary.com/da6znvkjz/image/upload/v1555623469/ComsatsSocial/usyp0ahz4svus4iaxnbd.png"},
  // imagePath : { data: Buffer, contentType: String },
  department: {type: String, required: true},
  registrationno: {type: String, required: true, unique: true},
  likes: {type: Array},
  dislikes: {type: Array},
  commentson: {type: Array},
  friends: [{type: String}],
  friended: [{type: String}],
  requests: [{type: String}],
  requested: [{type: String}],
  archives: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
  eventsjoined: [{type: mongoose.Schema.Types.ObjectId, ref: "Event"}],
  groupsjoined: [{type: mongoose.Schema.Types.ObjectId, ref: "Group"}],
  categories: [{types: String}],
  notifications: [
    {
      senderId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
      senderName: {type: String},
      senderimage: {type: String},
      message: {type: String},
      created: {type: Date, default: Date.now()}
    }
  ],
  chatList: [
    {
     receiverId:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      msgId:  {type: mongoose.Schema.Types.ObjectId, ref: 'Message'}
    }
  ]

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);//collection will be User
