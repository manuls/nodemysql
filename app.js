var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mysqlDump = require('mysqldump');
    execsql = require('execsql');
var conexion = require('./conex.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Creamos un objeto con
var router = express.Router();

//Con esto identificamos el query (NO JSON)
//URL tipo http://localhost:3000/prueba?test=blaaaaa&test2=puf
router.get('/prueba', function(req, res){
  var hostBD = req.query.hostBD;
  var portBD = req.query.p
  var userBD = req.query.userBD;
  var passwBD = req.query.passwdBD;
  var nameBD = req.query.nameBD;

  //Cogemos los query de la URL y hacemos la peticion
  if (req.query) {
    var namenewBD = conexion.makeid();
    conexion.conect(hostBD, userBD, passwBD, nameBD, namenewBD, function(err, response) {
      res.sendFile('views/import.html', {root: __dirname });
      if (err) {
        console.log("Error");
        res.sendFile('views/error.html', {root: __dirname });
      }
    });
  }
});

// Metodo de importacion si va a /import
// router.get('/import', function(req, res){
//   var hostBD = req.query.host;
//   var userBD = req.query.user;
//   var passwBD = req.query.passwd;
//   var nameBD = req.query.nameBD;
//   var archivoBD = req.query.archivoBD;
//
//
// });


app.use(router);
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
