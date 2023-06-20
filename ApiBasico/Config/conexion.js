const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'Paciente'
});

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error: '+ err)
    }
    else{
        console.log('La base de datos se conecto!')
    }
})

module.exports=conexion;