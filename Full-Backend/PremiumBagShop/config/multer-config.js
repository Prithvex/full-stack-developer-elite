const multer = require("multer");
const storage= multer.memoryStorage();
const upload = multer({storage: storage }); //by default upload to storage 

module.exports= upload;