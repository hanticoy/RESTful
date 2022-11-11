const express = require('express');
const app = express();

//habilitar comunicación entre los servidores con puerto
const cors = require('cors')
app.use(cors());

const routes = require('./server/config/routes.config')(app)


//exponemos el servidor en el la ip:puerto requerido
app.listen(5200, function () {
    console.log('servidor ejecutandose en http://localhost:5200');
});