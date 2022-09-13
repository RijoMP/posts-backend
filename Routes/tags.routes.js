const express = require('express');
const checkAuth = require('../Middleware/checkAuth.middleware');
const tagController = require('../Controllers/tags.controller')
const router = express.Router();

// router.post('/addtag', tagController.addTag);
// router.post('/gettags', tagController.getTags);
router.post('/addtag',checkAuth, tagController.addTag);
router.post('/gettags',checkAuth, tagController.getTags);

module.exports = router