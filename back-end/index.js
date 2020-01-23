const express = require('express');
const cors = require('cors');
const routes = require('./routes');



const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


if(app.listen(3333)){
    console.log("Servidor iniciado na porta 3333");
}