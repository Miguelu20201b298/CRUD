const router = require('express').Router();
const conexion = require('./Config/conexion')

//Asignamos todas las rutas
router.get('/',(req, res)=>{
    let sql ='select * from Paciente'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//---- get un Paciente
router.get('/:id', (req, res) => {
    const { id } = req.params;
    let sql = 'SELECT * FROM Paciente WHERE id_Paciente = ?';
    conexion.query(sql, [id], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.json(rows);
      }
    });
  });
  

//---- Agregar Paciente
router.post('/', (req, res) => {
    const { NombreCompleto,
        FechaNacimiento, 
        Genero,
        Direccion,
        Telefono,
        CorreoElectronico,
        NumeroSeguroMedico,
        RazonCita,
        SintomasQuejas,
        EstadoCita } = req.body;
  
    let sql = 'INSERT INTO Paciente (NombreCompleto, FechaNacimiento, Genero, Direccion, Telefono, CorreoElectronico, NumeroSeguroMedico, RazonCita, SintomasQuejas, EstadoCita) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    conexion.query(sql, [NombreCompleto, 
        FechaNacimiento, 
        Genero,
        Direccion,
        Telefono,
        CorreoElectronico,
        NumeroSeguroMedico,
        RazonCita,
        SintomasQuejas,
        EstadoCita], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.json({ status: 'Paciente agregado' });
      }
    });
  });  


//---- Eliminar Paciente
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    let sql = 'DELETE FROM Paciente WHERE ID_Paciente = ?';
    conexion.query(sql, [id], (err, rows, fields) => {
      if (err) throw err;
      else {
        res.json({ status: 'Paciente eliminado' });
      }
    });
  });
  


//---- Modificar Paciente
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {
      NombreCompleto,
      FechaNacimiento,
      Genero,
      Direccion,
      Telefono,
      CorreoElectronico,
      NumeroSeguroMedico,
      RazonCita,
      SintomasQuejas,
      EstadoCita
    } = req.body;
  
    let sql = `UPDATE Paciente SET 
                  NombreCompleto=?,
                  FechaNacimiento=?,
                  Genero=?,
                  Direccion=?,
                  Telefono=?,
                  CorreoElectronico=?,
                  NumeroSeguroMedico=?,
                  RazonCita=?,
                  SintomasQuejas=?,
                  EstadoCita=?
                  WHERE ID_Paciente = ?`;
  
    const values = [
      NombreCompleto,
      FechaNacimiento,
      Genero,
      Direccion,
      Telefono,
      CorreoElectronico,
      NumeroSeguroMedico,
      RazonCita,
      SintomasQuejas,
      EstadoCita,
      id
    ];
  
    conexion.query(sql, values, (err, rows, fields) => {
      if (err) throw err;
      else {
        res.json({ status: 'Paciente modificado' });
      }
    });
  });
  

//----------------------------------

module.exports = router;