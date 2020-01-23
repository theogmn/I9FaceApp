const Sequelize = require('sequelize');
const sequelize = require('./Connect');


const Face = sequelize.define('face', 
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        foto: {
            type: Sequelize.STRING,
            allowNull: false
        },
        face_recognition: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'face'
    });

    module.exports = Face;