var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mysqlDump = require('mysqldump');
var conexion = require('./conex.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Creamos un objeto con
var router = express.Router();

//Con esto identificamos el query
//URL tipo http://localhost:3000/prueba?test=blaaaaa&test2=puf
router.get('/prueba', function(req, res){
  var hostBD = req.query.host;
  var userBD = req.query.user;
  var passwBD = req.query.passwd;
  var nameBD = req.query.nameBD;

  if (req.query) {
    conexion.conect(hostBD, userBD, passwBD, nameBD);
  }

});


app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
