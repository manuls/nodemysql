var mysqlDump = require('mysqldump');

mysqlDump({
    host: 'localhost',
    user: 'roo2t',
    password: '',
    database: 'consumoelectrico',
    dest:'./data2.sql' // destination file
},
function(err){
      if(err)
          {
             console.log('Error: ', err);
             return;
          }
             console.log('Hecho');   // create data.sql file;
})
