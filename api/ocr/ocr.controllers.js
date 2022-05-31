const Tesseract = require('tesseract.js');

exports.ocrCreate = async (req, res, next) => {
  try {
    if (req.file) {
      // ==> IMPORTANT NOTE ==> WHEN SAVING INTO DATABASE JUST USE ==> req.body.image = `media/${req.file.filename}`; or req.body.image = req.file.path;
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`; // Save image path in request's body
      // req.body.image = req.file.path; ==> onther way solving 
      console.log("req.file.path: "+req.file.path);
      let result = await Tesseract.recognize(req.body.image, "eng"); // Tesseract Package ==> it will read out a text in an image
      res.status(201).json(result); // Respond with the text ina the image
    } else {
      res.status(400).json({message: "File Not foind"});
    }
  } catch (error) {
    next(error);
  }
};
