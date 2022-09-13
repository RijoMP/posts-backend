const express = require('express');
const checkAuth = require('../Middleware/checkAuth.middleware');
const postController = require('../Controllers/posts.controllers');
const router = express.Router();

// router.post('/createpost', postController.postCreate);
// router.post('/getposts', postController.getPosts);
router.post('/createpost',checkAuth, postController.postCreate);
router.post('/getposts',checkAuth, postController.getPosts);

module.exports = router