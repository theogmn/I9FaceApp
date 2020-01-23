const multer  = require('multer');


const upload = multer({ 
    dest: 'img/'   
 });

module.exports = upload;