const { Router } = require('express');
const FaceController = require('./src/controllers/FaceController');
const FileController = require('./src/controllers/FileController');
const upload = require('./src/utils/multer');

const routes = Router();


routes.get('/faces', FaceController.index);
routes.post('/faces/file', upload.single('img'), FileController.store);
routes.post('/faces', FaceController.store);

module.exports = routes;