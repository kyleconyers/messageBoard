const mongoose = require('mongoose')
//const User = require('user')
const Schema = mongoose.Schema
mongoose.promise = Promise
// Define userSchema
const messageSchema = new Schema({
	//author: { type: User, unique: false },
	text: { type: String },
	timeStamp: {
		type: Date
    },
    location: {type: Schema.Types.ObjectId, ref: 'Location'},
    topic: {type: Schema.Types.ObjectId, ref: 'Topic'}
})

const Message = mongoose.model('Message', messageSchema)
module.exports = Message