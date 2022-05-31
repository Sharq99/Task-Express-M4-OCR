const express = require('express');
const upload = require('../../middleware/multer');

//Controllers
const { ocrCreate } = require('./ocr.controllers');

//Routers
const router = express.Router();

//Post Image
router.post('/', upload.single('image'), ocrCreate); //Call upload from multer.js


module.exports = router;
