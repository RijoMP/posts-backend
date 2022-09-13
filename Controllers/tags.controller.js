
const Tag = require("../Models/tag");
const mongoose = require("mongoose");


const addTag = (req, res, next) => {
	Tag.find({ name: req.body.tagName })
		.exec()
		.then((tag) => {
			if (tag.length >= 1) {
        res.status(409).json({
          message:"tag Exists"
        })
			} else {
						const tag = new Tag({
							_id: new mongoose.Types.ObjectId(),
							name: req.body.tagName,
						});
						tag
							.save()
							.then(async (result) => {
								console.log(`tag created ${result}`)
								res.status(201).json({
								  message:"tag created"
								  })
					})
			}
		})
		.catch((err) => {
      console.log(err)
      res.status(500).json({
        message: err.toString()
      })
	})
}



const getTags = async (req, res) => {
	const tags = await Tag.find();
	if (tags) {
		res.status(200).json({
			message: "tags",
			tags
		});
	} else {
		res.status(400).json({
			message: "Bad request",
		});
	}
};

module.exports = {
addTag,getTags
};
