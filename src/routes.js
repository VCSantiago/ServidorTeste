const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');
const postController = require('./controllers/postController');
const userController = require('./controllers/userController');
const likeController = require('./controllers/likeController');


const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/post', postController.index);
routes.get('/user', userController.index);
routes.post('/post', upload.single('image') ,postController.store);

routes.post('/novo',upload.single(), userController.store);

routes.post('/post/:id/like', likeController.store);
module.exports = routes;