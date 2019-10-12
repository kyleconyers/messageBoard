const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise
const topicSchema = new Schema({
    name: {type: String, unique: true}
})

const Topic = mongoose.model('Topic', topicSchema)
module.exports = Topic