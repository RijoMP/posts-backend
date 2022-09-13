const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const Post = require("../Models/post");
const Tag = require("../Models/tag");
const mongoose = require("mongoose");

const postCreate = (req, res, next) => {
	console.log("here")
  req.body.tags.forEach(async(tag) => {

    exist = false;
	//console.log(exist);
	await Tag.findOne({ name: tag }, async (err, result) => {
		if (err){
			console.log(err)
		}
		else{
			console.log("Result : ", result);
			exist = true;
			if(result == null)
				exist = false
			if (!exist) {
				const tg = new Tag({
					_id: new mongoose.Types.ObjectId(),
					name: tag,
				});
				await tg.save();
				}
		}
	});
   
  });
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    tags: req.body.tags,
  });
  post
    .save()
    .then(async (result) => {
      await result
        .save()
        .then((result1) => {
          console.log(`Post created ${result}`);
          res.status(201).json({
			  message: " Post created successfully"
		  });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({
            message: err.toString(),
          });
        });
    })
    .catch((err) => {
      //console.log(err);
      res.status(500).json({
        message: err.toString(),
      });
    });
};

const getPosts = async(req, res, next) => {
  try{
	await Post.find({},(err, posts) => {
		if(err){
			res.status(209).json({
				message:"Internal error",
			})
		}
		else{
			}
		res.status(200).json({
			message:"Posts",
			data:posts
		})		
	})
  }
  catch(err){
	res.status(209).json({
		message:"Internal error",
	})
  }
};


module.exports = {
postCreate,getPosts
};
