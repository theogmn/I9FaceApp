const axios = require('axios');
const Face = require('../models/Face');




module.exports = {
      async store(req, resp, next) {
        const { id } = req.headers;
        const { filename } = req.file;
        
        
        const response = await Face.update({ foto: filename },{ where: { id } });
  
        return resp.json();
    }
};