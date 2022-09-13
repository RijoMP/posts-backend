const { timeStamp } = require("console");
const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
  title: String,
  description:String,
  date:String,
  tags:[String]
});

module.exports = mongoose.model("Post", postSchema);