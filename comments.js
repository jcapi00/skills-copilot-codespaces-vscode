// Create web server for comments
//========================================

//Import module
const express = require('express');
const router = express.router();
const commentController = require('../controllers/comment');

// Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_generate);
router.post('/create', commentController,comment_create_panel);
router.get('/:id/delete', commentController.comment_delete);