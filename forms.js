<<<<<<< HEAD
// Pasta para conectar com banco de dados ao formulário//

//constante bd=banco de dados//

const bd = require("/bd.js")




//const Forms = bd.sequelize.define('techlabs')
//Exportando o módulo forms//
//module.exports = Forms
=======
// Pasta para conectar com banco de dados ao formulário//

//constante bd=banco de dados//

const bd = require("/bd.js")
const Forms = bd.sequelize.define('techlabs')

//Exportando o módulo forms//

module.exports = Forms
>>>>>>> 04a796b78f0362f5590f956d38a3dd316d293931
