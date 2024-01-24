const multer = require("multer");

const config = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, __dirname + "/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
