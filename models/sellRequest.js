const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	storage: String,
	condition: String,
	price: Number ,
	status: String,
})

module.exports = mongoose.model("sellRequest", schema)