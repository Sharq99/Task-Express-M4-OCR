const express = require('express');
const path = require("path");
const ocrRoutes = require('./api/ocr/ocr.routes');
const app = express();


app.use(express.json());

//Create Path To Media Folder
app.use('/media', express.static(path.join(__dirname, 'media')));

//Routes
app.use('/api/ocr', ocrRoutes);

//Path Not Found MiddleWare
app.use((req, res, next) => {
  res.status(404).json({ message: 'Path not found' });
});

//Error Handeling MiddleWare
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || 'Internal Server Error',
  });
});

app.listen(8000, () => {
  console.log('The application is running on localhost:8000');
});
