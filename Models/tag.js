const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
  name: String
});

module.exports = mongoose.model("Tag", tagSchema);