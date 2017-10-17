function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return '-'+text;
}

function conect(arrayDatos, namenewBD, callback) {
  mysqlDump({
      host: arrayDatos["host"],
      port: arrayDatos["port"],
      user: arrayDatos["user"],
      password: arrayDatos["passwd"],
      database: arrayDatos["name"],
      dest: './'+arrayDatos["name"]+namenewBD // destination file
  },
  function(err){
        if(err)
            {
              console.log(err);
              callback(err);
            }
            else {
              console.log('> DUMP de base de datos '+arrayDatos["name"]+' realizada');
            }
            // create data.sql file;
  })
};

// function importar(hostBD, userBD, passwordBD, nameBD, fileBD, callback) {
//     dbConfig = {
//         host: hostBD,
//         user: userBD,
//         password: passwordBD
//     },
//     sql = 'CREATE DATABASE ' +nameBD; 'use '+fileBD,
//     sqlFile = __dirname + fileBD;
//     execsql.config(dbConfig)
//     .exec(sql)
//     .execFile(sqlFile, function(err, results){
//         console.log(results);
//     }).end();
// };
//hay que hacer aqui un evento para saber cuando termina
exports.makeid = makeid;
exports.conect = conect;
// exports.importar = importar;
