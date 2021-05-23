var mysql=require('mysql');
var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'ell5280p#M',
   database:'db'
});

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
});  
module.exports = connection; 



//const Sequelize = require ('sequelize')
//const sequelize = new Sequelizes ('techlabs', 'root', 'ell5280p#M')
//host:'localhost'
//dialect:"mysql"


//Criando um Model para o envio do formulario; o envio se dá pela constante Formulario//

