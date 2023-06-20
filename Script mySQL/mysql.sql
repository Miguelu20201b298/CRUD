#Crear tabla Paciente
create database if not exists Paciente;

use Paciente;

CREATE TABLE Paciente (
    id_paciente INT PRIMARY KEY AUTO_INCREMENT,
    nombre_completo VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    genero ENUM('Masculino', 'Femenino') NOT NULL,
    direccion VARCHAR(200),
    telefono VARCHAR(20),
    correo_electronico VARCHAR(100),
    numero_seguro_medico VARCHAR(50),
    razon_cita VARCHAR(200),
    sintomas_quejas TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_cita VARCHAR(100)
);

#------Codigo_SQL_PRUEBA

#Agregar una cita
INSERT INTO Paciente (nombre_completo, fecha_nacimiento, genero, direccion, telefono, 
correo_electronico, numero_seguro_medico, razon_cita, sintomas_quejas, estado_cita) 
VALUES ('Juan Pérez', '1990-05-10', 'Masculino', 'Calle Principal 123', '123456789', 
'juan@example.com', '12345678', 'Consulta médica', 'Dolor de cabeza y fiebre', 'confirmo');

#Agregar una cita con datos obligatorios
insert into Paciente(nombre_completo, fecha_nacimiento, genero) 
values ('Dominik Mendoza', '1990-07-10', 'Masculino');

/*DROP TABLE IF EXISTS Paciente CASCADE;
/*DROP TABLE Paciente;

/*#Ver todas las citas
/*use Paciente;
/*SELECT * FROM Paciente;

/*#Ver cita por ID
/*SELECT * FROM Paciente 
/*WHERE ID_Paciente = 1;

/*#Editar una cita
/*UPDATE Paciente 
/*SET Telefono = '987654321', 
/*CorreoElectronico = 'juan.nuevo@example.com' 
/*WHERE ID_Paciente = 1;

/*#Eliminar una cita
/*DELETE FROM Paciente 
/*WHERE ID_Paciente = 1;