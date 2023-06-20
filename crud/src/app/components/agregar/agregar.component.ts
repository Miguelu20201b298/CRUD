import { Component } from '@angular/core';
import {EquipoService, Paciente} from '../../services/equipo.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
paciente:Paciente={
  id_paciente:'',
  nombre_completo:'',
  fecha_nacimiento:'',
  genero:'',
  direccion:'',
  telefono:'',
  correo_electronico:'',
  numero_seguro_medico:'',
  razon_cita:'',
  sintomas_quejas:'',
  fecha_registro:'',
  estado_cita:''
}
constructor(private equipoService:EquipoService, private router:Router) { }

agregar(){
  delete this.paciente.id_paciente;

  this.equipoService.addPaciente(this.paciente).subscribe();
  this.router.navigate(['/inicio']);
}
}
