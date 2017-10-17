//Variables requeridas
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mysqlDump = require('mysqldump');
    execsql = require('execsql');
    conexion = require('./conex.js');
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

//Creamos objeto Router de Express
var router = express.Router();
app.use(router);
app.listen(3000, function() {
  console.log("Servidor escuchando en http://localhost:3000");
});

//Recogemos el JSON en POST
app.post('/importar', function(req, res) {
    //Comprobamos que la petición no esté vacía
    if(req.body.constructor === Object && Object.keys(req.body).length !== 0) {
      var arrayDatos = { host:req.body.host, port:req.body.port, user:req.body.user, passwd:req.body.passwd, name:req.body.name };
      conexion.conect(arrayDatos, conexion.makeid(), function(err, response) {
        if (err) {
          res.send('(!!) ERROR de datos enviados');
        }
      });
    }
    else {
      console.log('(!!) ERROR de POST: No se ha recibido nada');
    }
});
