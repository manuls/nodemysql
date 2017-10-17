function conect(hostBD, userBD, passwordBD, nameBD) {
  mysqlDump({
      host: hostBD,
      user: 'root',
      password: passwordBD,
      database: nameBD,
      dest:'./data3.sql' // destination file
  },
  function(err){
        if(err)
            {
               console.log('Error: ', err);
               return;
            }
               console.log('Hecho');   // create data.sql file;
  })
};
//hay que hacer aqui un evento para saber cuando termina
exports.conect = conect;
