const axios = require('axios');
const Face = require('../models/Face');

module.exports = {
    async index(req, resp) {
        const faces = await Face.findAll();
        return resp.json(faces);
    },
    async store(req, resp){
        const { nome, foto, face_recognition } = req.body;

        const response = await Face.create({
            nome
        });
    return resp.json(response);
    }

};