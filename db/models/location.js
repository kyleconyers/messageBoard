const mongoose = require('mongoose')
//const User = require('user')
const Schema = mongoose.Schema
mongoose.promise = Promise
// Define userSchema
const locationSchema = new Schema({
	//author: { type: User, unique: false },
	parent: {type: Schema.Types.ObjectId, ref: 'Location'},
    name: {type: String}
})

const Location = mongoose.model('Location', locationSchema)
module.exports = Location